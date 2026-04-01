#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/../.." && pwd)"
HOOKS_DIR="$(git -C "$ROOT_DIR" rev-parse --git-path hooks)"

mkdir -p "$HOOKS_DIR"
cp "$ROOT_DIR/scripts/git-hooks/pre-push" "$HOOKS_DIR/pre-push"
chmod +x "$HOOKS_DIR/pre-push"

echo "✅ granoflow-docs git hooks 已安装: $HOOKS_DIR"

