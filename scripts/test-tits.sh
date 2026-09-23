#!/bin/zsh
set -euo pipefail
ROOT="${0:A:h:h}"
QUIET=0
for ARG in "$@"; do
  case "$ARG" in
    --quiet) QUIET=1 ;;
    *) echo "Unknown test option: $ARG" >&2; exit 2 ;;
  esac
done
VNREVIVAL_GAME=tits VNREVIVAL_TEST_QUIET="$QUIET" "$ROOT/scripts/test.sh"
