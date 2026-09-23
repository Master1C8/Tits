#!/bin/zsh
set -euo pipefail
ROOT="${0:A:h:h}"
VNREVIVAL_GAME=tits "$ROOT/scripts/build.sh" "$@"
