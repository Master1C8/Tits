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
