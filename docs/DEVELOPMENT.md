# Development map

Use the smallest relevant context first. Search symbols with `rg -n`, read
bounded ranges, and inspect the final diff after edits.

| Task | Read first | Focused verification |
|---|---|---|
| TiTS selectors or identity | `src/games/tits/adapter.js`, `src/games/tits/game.json` | `./scripts/test-adapter.sh --quiet` |
| Translation primitives | `src/translation-core.js`, matching test | `./scripts/test-runtime.sh --unit-only --quiet` |
| Panel or runtime behavior | matching source and `tests/runtime/` scenario | `./scripts/test-runtime.sh` |
| Credential helper | relevant section of `src/local_service.py` | `./scripts/test-service.sh` |
| macOS discovery/launch | `launcher/macos/launch.sh`, manifest and plist | full suite |
| Windows launch/package | `launcher/windows/launcher.c`, `scripts/build-windows.sh` | full suite |
| Release packaging | `scripts/build.sh`, `scripts/verify.sh` | full suite and build |

Commands:

```text
./scripts/test-runtime.sh
./scripts/test-service.sh
./scripts/test-adapter.sh --quiet
./scripts/test-browser-smoke.sh
./scripts/test-tits.sh --quiet
./scripts/test-tits.sh
```

The browser bundle is synchronous and concatenates core, languages, provider
configuration, generated game config, the TiTS adapter, interface presets,
panel, and runtime. `src/languages.json` is the canonical language catalog.
`src/local_service.py` stays Python-standard-library-only because it ships in
both desktop packages.

## Local release provenance

Use `python3 scripts/build-provenance.py --game tits --release releases/NEW_REVISION`
from clean, pushed canonical `main`. Restore tooling with `uv sync --locked` and
prepare the official Python 3.11.9 Windows embeddable archive in `.build/cache/`.
The recipe uses the existing full test/build/package verification path, records
source and tool identities, and compares every final ZIP file against its stage.
It keeps existing release archives and writes to a new directory. macOS tools and
SDK come from the same active `xcrun` toolchain rather than a hardcoded Xcode path.
The new path uses ad hoc signing without notarization or paid provider requests.
`SHA256SUMS` describes the final archives after embedding `vnrevival-release.json`;
older build-stage checksum files do not describe those augmented archives.
The unsigned record proves the declared local build boundary, not independent
attestation or a new real-game acceptance run.
