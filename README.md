# TiTS Translator

Real-time desktop translator for the public Electron build of **Trials in
Tainted Space**. It reuses the proven VN Revival CoC2 translator runtime while
keeping TiTS identity, DOM selectors, launch behavior, settings, and cache in a
dedicated project.

The translator changes only rendered Text nodes and reversible presentation
attributes. It does not extract, patch, or redistribute game files, and it does
not create a static localization.

## Supported target

- Game: Trials in Tainted Space public build `0.9.165`
- Source language: English
- Platforms: native macOS public app; Windows x64 public app (including Windows
  11 on Arm through built-in x64 emulation)
- VN Revival slug: `trials-in-tainted-space`
- Languages: the shared 31-language VN Revival catalog

## Development

```text
./scripts/test-tits.sh --quiet
./scripts/build-tits.sh
```

Builds and release archives remain under this project in `.build/` and
`launcher/READY_TO_SHARE/`. The official game is never included.

Detailed controls and installation instructions are in
[`docs/USER_GUIDE.md`](docs/USER_GUIDE.md). Current readiness is recorded in
[`docs/CHECKPOINT.md`](docs/CHECKPOINT.md).

## Provenance

The base is `/Users/antonkrutov/Desktop/coc2-translation-mod` at commit
`57990eadca2da490ee6286b6340e56082d495073` (base version `0.11.3`). See
[`docs/ADAPTATION.md`](docs/ADAPTATION.md) for the reuse map.
