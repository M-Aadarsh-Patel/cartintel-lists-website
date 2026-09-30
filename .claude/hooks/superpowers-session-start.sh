#!/usr/bin/env bash
# SessionStart hook: inject the using-superpowers skill into context.
# Ported from obra/superpowers hooks/session-start for a project-local (vendored) install.
set -euo pipefail
ROOT="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "$0")/../.." && pwd)}"
SKILL="${ROOT}/.claude/skills/using-superpowers/SKILL.md"
[ -f "$SKILL" ] || exit 0
content=$(cat "$SKILL")
escape_for_json() {
  local s="$1"
  s="${s//\\/\\\\}"; s="${s//\"/\\\"}"; s="${s//$'\n'/\\n}"; s="${s//$'\r'/\\r}"; s="${s//$'\t'/\\t}"
  printf '%s' "$s"
}
ctx="<EXTREMELY_IMPORTANT>\nYou have superpowers.\n\n**Below is the full content of your 'using-superpowers' skill - your introduction to using skills. For all other skills, use the 'Skill' tool:**\n\n$(escape_for_json "$content")\n</EXTREMELY_IMPORTANT>"
printf '{\n  "hookSpecificOutput": {\n    "hookEventName": "SessionStart",\n    "additionalContext": "%s"\n  }\n}\n' "$ctx"
exit 0
