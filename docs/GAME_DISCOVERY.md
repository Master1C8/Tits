# Trials in Tainted Space public-build discovery

## Pinned target

- Game: Trials in Tainted Space
- Public version: `0.9.165`
- Source language: English
- Official macOS archive name: `TiTS-public-0.9.165-mac.zip`
- Official Windows archive name: `TiTS-public-0.9.165-win.zip`
- macOS bundle identifier: `com.fenoxo.tits`
- macOS bundle executable: `TiTS`
- macOS executable architectures: `arm64` and `x86_64`
- Renderer title: `Trials in Tainted Space`
- Renderer URL origin: `tits://titsapp`

## Technical evidence

The official play page links native Windows and macOS Electron downloads. The
web build loads `runtime.0aead0b3.js`, `vendors.7c8d3722.js`, and
`main.3d7480d9.js`. The main bundle exports version `0.9.165`, assigns it to
`window.version`, and renders ordinary HTML/React text surfaces including
`.mainTextContainer`, `.mainText`, `.combatOutput`, `.tooltipWrapper`,
`.tooltipBody`, `.gameSaveSlot`, buttons, links, and selects.

Verified SHA-256 evidence:

- official macOS archive: `81e7c9641613d67c48ecae52fa9d12ade426db1d10b5feb15885b67467c9fc23`
- official Windows archive: `9a6762e5a1d3088c279ed45a7062f5968726f07b4b28d454a31026914a7011ef`
- extracted Windows `TiTS.exe`: `6f8980dabbb03ad7ef64cf8ddc0609dcff9dfe9d42519175e72f6e43f7cfc82e`
- observed `main.3d7480d9.js`: `4eb6d756fb76eb0ff859c97d2266e58a336944b1ee97c6615ff4ae5acde83af6`

The selected integration therefore reuses Electron CDP and Text-node mutation.
It does not read or repack the game application. The official source/download
page is <https://www.fenoxo.com/play-games/> and the observed browser build is
<https://www.fenoxo.com/play/TiTS/release/>.

## Runtime evidence

Native macOS and Windows launches, live CDP attachment, translator-panel
injection, and helper startup passed on 2026-09-23. A Google-backed Russian
translation of the native Windows main menu also passed visual review in
Parallels. Story progression, tooltips, combat, and additional locales remain
`not-run` until explicitly authorized runtime/visual QA is completed.
