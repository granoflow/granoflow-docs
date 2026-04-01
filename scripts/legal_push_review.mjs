#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const ZERO_SHA = "0000000000000000000000000000000000000000";
const BLOCKER_PATTERNS = [
  {
    id: "todo-marker",
    regex: /\b(?:TODO|TBD|FIXME|XXX)\b/i,
    message: "contains an unfinished draft marker",
  },
  {
    id: "legal-review-marker",
    regex:
      /待律师确认|待法务确认|需律师确认|需法务确认|律师确认后|法务确认后|requires?\s+(?:legal|lawyer)\s+review|pending\s+(?:legal|lawyer)\s+review|subject\s+to\s+legal\s+review|to\s+be\s+confirmed/i,
    message: "contains an unresolved legal review marker",
  },
  {
    id: "mismatch-marker",
    regex:
      /文实不符|实现不一致|未核实|尚未核实|未确认|尚未确认|not\s+yet\s+verified|not\s+verified|implementation\s+mismatch/i,
    message: "contains an unresolved fact or implementation mismatch marker",
  },
  {
    id: "private-path-marker",
    regex:
      /granoflow-internal|docs-temp\/|\.cursor\/rules|\/Users\/|内部版|研究稿|内部审阅/i,
    message: "contains a private/internal reference that should not be published",
  },
  {
    id: "placeholder-marker",
    regex:
      /占位文案|占位文本|\bplaceholder\s+(?:text|copy|only|here|todo|tbd)\b/i,
    message: "contains placeholder language",
  },
  {
    id: "html-comment-marker",
    regex: /<!--/,
    message: "contains an HTML comment that may hide internal review notes",
  },
];

function git(args, options = {}) {
  return execFileSync("git", args, {
    cwd: options.cwd || process.cwd(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function tryGit(args, options = {}) {
  try {
    return git(args, options);
  } catch {
    return "";
  }
}

function readStdin() {
  return new Promise((resolve) => {
    let data = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (chunk) => {
      data += chunk;
    });
    process.stdin.on("end", () => resolve(data));
  });
}

function parseUpdates(stdinText) {
  return stdinText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [localRef, localSha, remoteRef, remoteSha] = line.split(/\s+/);
      return { localRef, localSha, remoteRef, remoteSha };
    })
    .filter((item) => item.localRef && item.localSha && item.remoteRef && item.remoteSha);
}

function listPublicDocs(rootDir) {
  const docsDir = path.join(rootDir, "docs");
  if (!existsSync(docsDir)) {
    return [];
  }

  return readdirSync(docsDir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => path.posix.join("docs", name))
    .sort();
}

function collectChangedPublicDocs(rootDir, updates) {
  const allDocs = listPublicDocs(rootDir);
  if (updates.length === 0) {
    return [];
  }

  let reviewAllDocs = false;
  const changed = new Set();

  for (const update of updates) {
    if (update.localSha === ZERO_SHA) {
      continue;
    }
    if (!update.localRef.startsWith("refs/heads/")) {
      continue;
    }
    if (update.remoteSha === ZERO_SHA) {
      reviewAllDocs = true;
      continue;
    }

    const diffOutput = tryGit(
      ["diff", "--name-only", update.remoteSha, update.localSha, "--", "docs"],
      { cwd: rootDir },
    );
    for (const file of diffOutput.split(/\r?\n/).filter(Boolean)) {
      if (file.startsWith("docs/") && file.endsWith(".md")) {
        changed.add(file);
      }
    }
  }

  if (reviewAllDocs) {
    return allDocs;
  }

  return Array.from(changed).sort();
}

function collectDeterministicFindings(rootDir, docs) {
  const findings = [];

  for (const relPath of docs) {
    const absPath = path.join(rootDir, relPath);
    const content = readFileSync(absPath, "utf8");
    const lines = content.split(/\r?\n/);

    lines.forEach((line, index) => {
      for (const pattern of BLOCKER_PATTERNS) {
        if (!pattern.regex.test(line)) {
          continue;
        }
        findings.push({
          file: relPath,
          line: index + 1,
          rule: pattern.id,
          reason: pattern.message,
          evidence: line.trim().slice(0, 220),
        });
      }
    });
  }

  return findings;
}

function renderDeterministicFindings(findings) {
  console.error("[pre-push] Reject push: public docs contain blocked markers.");
  for (const finding of findings) {
    console.error(
      `  - ${finding.file}:${finding.line} [${finding.rule}] ${finding.reason}: ${finding.evidence}`,
    );
  }
}

function buildPromptPayload(rootDir, changedDocs, allDocs) {
  return {
    repository: path.basename(rootDir),
    changed_docs: changedDocs,
    all_public_docs: allDocs.map((relPath) => ({
      path: relPath,
      content: readFileSync(path.join(rootDir, relPath), "utf8"),
    })),
    release_gate: {
      approve_only_if: [
        "all public legal docs look final and safe to publish",
        "there are no unresolved draft markers, placeholders, or TODO-style notes",
        "there are no unresolved jurisdiction tradeoffs or open scoping decisions left in public text",
        "there are no unresolved implementation-mismatch or not-yet-verified statements in public text",
        "there are no references saying legal or lawyer confirmation is still pending",
        "there are no internal/private paths, research notes, or workflow notes in public docs",
        "critical disclosures across language versions are materially aligned",
      ],
      reject_if_any: [
        "draft or placeholder wording remains",
        "public text still contains jurisdiction tradeoff language that has not been resolved",
        "public text admits unresolved mismatch between policy and implementation",
        "public text says legal review or lawyer confirmation is still pending",
        "public docs leak internal notes, private paths, or research workflow details",
        "different language versions materially disagree on controller/contact/rights/retention/cross-border/AI/payment disclosures",
      ],
      output_contract: {
        decision: "approve or reject",
        summary: "one short sentence",
        findings: [
          {
            file: "docs/...",
            severity: "blocker",
            reason: "why this blocks push",
            evidence: "short quote or description",
          },
        ],
      },
    },
  };
}

async function runOpenAIReview(rootDir, changedDocs, allDocs) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is required for granoflow-docs pre-push AI review. Refusing to push without AI review.",
    );
  }

  const model =
    process.env.GRANOFLOW_DOCS_AI_REVIEW_MODEL ||
    process.env.OPENAI_MODEL ||
    "gpt-4.1-mini";

  const payload = buildPromptPayload(rootDir, changedDocs, allDocs);
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are a strict release gate for public legal documents. Only approve when the documents are clearly final, publishable, and free of unresolved drafting or legal-review markers. If there is any unresolved blocker, reject.",
        },
        {
          role: "user",
          content: JSON.stringify(payload),
        },
      ],
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OpenAI API request failed (${response.status}): ${text}`);
  }

  const json = await response.json();
  const content = json?.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("OpenAI API returned an empty review response.");
  }

  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch (error) {
    throw new Error(`OpenAI review response was not valid JSON: ${error.message}`);
  }

  return parsed;
}

function renderAiFailure(review) {
  console.error("[pre-push] Reject push: AI legal review found unresolved blockers.");
  if (review.summary) {
    console.error(`  Summary: ${review.summary}`);
  }
  for (const finding of review.findings || []) {
    console.error(
      `  - ${finding.file || "unknown"} [${finding.severity || "blocker"}] ${finding.reason || "Unspecified blocker"}${finding.evidence ? `: ${finding.evidence}` : ""}`,
    );
  }
}

async function main() {
  const rootDir = git(["rev-parse", "--show-toplevel"]);
  const allDocs = listPublicDocs(rootDir);

  if (process.argv.includes("--self-check")) {
    console.log("[legal-push-review] Self-check OK");
    console.log(`[legal-push-review] Public docs: ${allDocs.join(", ") || "(none)"}`);
    const findings = collectDeterministicFindings(rootDir, allDocs);
    if (findings.length > 0) {
      renderDeterministicFindings(findings);
      process.exit(1);
    }
    process.exit(0);
  }

  const stdinText = await readStdin();
  const updates = parseUpdates(stdinText);
  const changedDocs = collectChangedPublicDocs(rootDir, updates);

  if (changedDocs.length === 0) {
    console.log("[pre-push] No public docs changes detected in push. Skipping AI legal review.");
    process.exit(0);
  }

  console.log(`[pre-push] Public docs in review: ${changedDocs.join(", ")}`);

  const deterministicFindings = collectDeterministicFindings(rootDir, allDocs);
  if (deterministicFindings.length > 0) {
    renderDeterministicFindings(deterministicFindings);
    process.exit(1);
  }

  let review;
  try {
    review = await runOpenAIReview(rootDir, changedDocs, allDocs);
  } catch (error) {
    console.error(`[pre-push] Reject push: ${error.message}`);
    process.exit(1);
  }

  const decision = String(review?.decision || "").trim().toLowerCase();
  const findings = Array.isArray(review?.findings) ? review.findings : [];
  if (decision !== "approve" || findings.length > 0) {
    renderAiFailure(review || {});
    process.exit(1);
  }

  console.log("[pre-push] AI legal review passed.");
}

main().catch((error) => {
  console.error(`[pre-push] Reject push: ${error.message}`);
  process.exit(1);
});
