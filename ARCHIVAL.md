# Source-only archival

Canonical source, game-specific manifest/adapter, editable app icons/assets,
licenses, source tests and locked development dependency metadata are retained.
No game copy, static translation pack, provider key or player save is required to
edit and rebuild this realtime translator. Runtime/user data are outside cleanup.

## Restore and normal build

Follow [the verified toolchain recipe](docs/BUILD_TOOLCHAIN.md) and
`build-toolchain.json`: official Swift6.3.2 + macOS26.5 SDK, Python3.14.6/uv.lock,
Node22.x and MinGW-w64. Both platform builds passed from fresh generated/dependency
directories on2026-11-03; the former Intel link blocker was resolved without changing
app code, minimum OS support or runtime compatibility flags. Both universal slices
declare macOS12.0; strict ad hoc signing, Windows PE, ZIP/hash/content checks and
existing full source/browser test suites passed. No new game/provider/runtime or
visual acceptance is claimed.

Current accepted installers and compact publication evidence remain in
`release-0.1.4-66988afff8cf` in `Master1C8/Tits`. Authenticated cold download and complete
archive checks passed against existing published hashes. No new verification
build was uploaded or published. Git clone restores all editable icons and code;
only standard development tools/runtime distributions are downloaded separately.

After verified restoration/build, installed environments, old and fresh .build
caches, previous/current local distribution copies and temporary review intermediates
are retired. Keep the canonical source checkout and normal Git history. Repository
visibility/history remain unchanged and it stays writable for future fixes.

The 120 current delivered screenshot originals (30 non-source locales × four scenes)
remain recoverable from the unpublished `storage-recovery-2026-11-03` draft, asset
`TiTS-Delivered-Screenshot-Evidence-0.1.4.zip`, SHA-256
`629d54a3aa80f7a963c8a4687a0f739a76147b950b6660cc6493a10291fe486a`.
This retains the delivered evidence only; duplicate staging copies, source-English
captures, old partial runs, crops and contact sheets are not retained. Download with
`gh release download storage-recovery-2026-11-03 --repo Master1C8/Tits --pattern TiTS-Delivered-Screenshot-Evidence-0.1.4.zip --dir .build/evidence-recovery`.
Verify the archive hash and every member against `_EVIDENCE_MANIFEST.json` before
crediting an exact restoration. Historical visual status is unchanged. Keep the
draft unpublished and remove restored images/cache again after use.
