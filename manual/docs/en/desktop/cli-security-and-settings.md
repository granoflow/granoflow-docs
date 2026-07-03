---
title: "Security Settings and Secret Boundaries"
description: "Understand the Local HTTP API switch, access-code protection, official documentation debugging, App Lock, redaction, and different secret types."
---

## Think in Permissions: Start with API Gates

Protected Local HTTP endpoints pass through a fixed gate order:

1. Local HTTP API master switch
2. origin check
3. App Lock
4. nonce
5. access-code protection
6. endpoint-level permission

Discovery endpoints such as `/v1/health` and `/v1/version` are useful reachability checks. Endpoints that read or modify app data must pass more gates.

## Access-Code Protection

When access-code protection is enabled, protected endpoints need an access code. It can be sent in two ways:

- **HTTP request**: `Authorization: Bearer <token>` header
- **CLI command**: `--token <value>` or the `GRANOFLOW_API_TOKEN` environment variable

Do not put access codes in URLs, and do not commit them to script repositories.

## Official Documentation Debugging

`granoflow.com` documentation pages do not have business API access by default. To debug the local API from a documentation page, manually enable official documentation debugging in the app settings page.

Each enable action creates a temporary access code that lasts one hour. Turning debugging off, expiry, app restart, or enabling debugging again invalidates the old code.

## Local HTTP API Switch

When the Local HTTP API is off, protected endpoints are rejected rather than silently writing data. The CLI can still run local commands that do not depend on the API, for example:

```bash
granoflow help
granoflow config --json
granoflow backup decrypt --input encrypted.flow.grano --output plaintext.flow.grano --secret-file secret.txt --json
```

## App Lock, nonce, and Origin Checks

Even if access-code protection is off, earlier gates still apply. If origin check, App Lock, or nonce validation fails, the request is rejected first. For these errors, return to the app and confirm that the interface is enabled, the app is unlocked, and the request origin is allowed.

## Think in Redaction as Assistance

Redaction reduces the risk of exposing sensitive information to external AI inputs. It is a helper, not encryption, access-code validation, or a permission system.

## Think in Secrets Separately: Do Not Mix Three Secret Types

- **API access code**: credential for the Local HTTP API, passed through the Authorization header, CLI `--token`, or `GRANOFLOW_API_TOKEN`.
- **Backup secret**: secret used to encrypt or decrypt a backup package, usually passed to offline backup conversion through `--secret-file` or `--secret-env`.
- **Cloud sync secret**: used for end-to-end encrypted cloud-sync data recovery.

These have different jobs and cannot replace each other.

## CLI Temporary Asset Cleanup

If future CLI commands generate short-lived plaintext assets, clean them according to command help or settings guidance. The current stable manual entry should remain the CLI help; do not treat app settings as a CLI installer or system permission manager.

## Environment Variables

| Variable | Purpose |
| --- | --- |
| `GRANOFLOW_API_BASE_URL` | Local HTTP API base URL, such as `http://127.0.0.1:56789` |
| `GRANOFLOW_API_TOKEN` | API access code |
| `GRANOFLOW_CONFIG` | CLI config-file path |

## Reference: Rules and Boundaries

- The desktop app does not install the CLI and does not write PATH, MSIX aliases, or symlinks.
- CLI config stores connection information such as API address and token; do not mix backup secrets, cloud sync secrets, and API access codes.
- Allowing any device origin must be built on access-code protection. CORS or origin allowlisting is not authorization.
