# TiTS Translator development guide

This repository contains only the real-time DOM translator for the public
Electron build of Trials in Tainted Space. It does not contain game assets, a
static translation pack, or a production deployment workflow.

## Start here

- Read `docs/DEVELOPMENT.md` for the task-to-file map and focused checks.
- Read `docs/ARCHITECTURE.md` for cross-layer or launch-path changes.
- Read `docs/ADAPTER_CONTRACT.md` for manifest or DOM adapter changes.
- Read `docs/USER_GUIDE.md` when user-visible behavior changes.
- Treat `docs/CHECKPOINT.md` as the current status; do not infer readiness from
  historical build output.

## Required invariants

- Preserve the repository-local Git identity. Complete verified work belongs on
  `main`; do not publish or create a release unless the owner explicitly asks.
- Keep CDP and the credential helper on loopback.
- Never expose or print API keys, vault contents, launch tokens, saves, or other
  private player data.
- Keep game identity in `src/games/tits/game.json` and TiTS DOM rules in its
  adapter; shared runtime files remain game-neutral.
- Preserve Text nodes and context markers. Do not replace game `innerHTML`.
- Keep Windows packages compatible with the embeddable Python standard library.
- Never bundle, modify, or redistribute the TiTS game itself.
- Before integration, run `./scripts/test-tits.sh --quiet`; use the verbose form
  to diagnose failures.
