# Current localization status

Date: 2026-09-23
Game: Trials in Tainted Space public `0.9.165`
Checkout: `/Users/antonkrutov/Desktop/Tits`
Delivery type: real-time translation
Source locale: `en`
VN Revival slug: `trials-in-tainted-space`
Glossary: 188 canonical entries; every non-source site locale is structurally
complete in the master repository. Editorial readiness is not inferred from
structure and remains `needs-review` unless separate evidence is supplied.

Shared technical evidence:

- Full suite: `./scripts/test-tits.sh --quiet` passed on 2026-09-23 (38 Node
  checks, 69 Python checks, browser smoke, 31-language source verification).
- macOS archive: `launcher/READY_TO_SHARE/TiTS-Translator-macOS-0.1.2.zip`,
  385,304 bytes, SHA-256
  `d2ff4386a7dc97b2d88fadffa0270bb35ae9d6bd674329e2b23417d1a2b9c941`.
- Windows archive: `launcher/READY_TO_SHARE/TiTS-Translator-Windows-0.1.2.zip`,
  11,458,629 bytes, SHA-256
  `b8378629f65821e89892a1205c4d490dc1429de8893d5c4458453fb6914dda91`.
- `./scripts/build-tits.sh` passed archive checksum, universal macOS controller,
  Windows PE32+ x86-64, signing-integrity, package-content, and product gates.
- Official game archive inspection passed. A clean real macOS launch, local
  helper startup, CDP attachment, and visible translator-panel check passed on
  2026-09-23.
- Windows 11 ARM in Parallels passed a clean local-drive launch of the official
  `TiTS-public-0.9.165-win.zip`, helper startup, CDP attachment, panel injection,
  Russian selection, Google-backed main-menu translation, and visual review on
  2026-09-23. The game must be extracted to the VM-local drive; Electron did
  not start reliably from the Parallels shared macOS filesystem.
- Windows QA evidence is retained locally at
  `.build/windows-qa/windows-russian-translated.png` (SHA-256
  `68a05709cb947d9813f15ff2371716a956a8ef86ff8c51cd0b2648bdad361efa`).
  Parallels shared NAT had no outbound route during the run, so provider access
  was verified through a temporary guest-only host proxy and the Windows proxy
  setting was restored afterward. Repair VM networking before the next live
  provider test.
- Version `0.1.1` adds a TiTS-specific Hebrew control-label correction for the
  five species choices shown in the owner's race-selection screenshot. The
  translator had collected these buttons, but the Hebrew site glossary kept
  their names in Latin script. The correction is confined to exact control
  labels; story text, tooltips, other controls, and other locales retain their
  provider output. Browser smoke and adapter checks passed; the updated build
  has not yet been reinstalled into the live game.
- Version `0.1.2` restores the visible `Capture all languages` button and
  screenshot-number field. The browser smoke test confirms the control is
  visible and enabled and the existing 31-language batch restores settings,
  finalizes evidence, and opens the screenshots folder. The full test suite
  and macOS/Windows package verification passed. The new packages have not
  yet been reinstalled into the live game.
- The measured 2026-09-23 model-usage snapshot is recorded in
  `docs/MODEL_USAGE_AUDIT.md` and `data/model-usage-2026-09-23.json`. Production
  sync is pending: the guarded site CLI stopped before dry-run because the
  running SiteForMods revision differs from local `main` and requires a separate
  owner-authorized production deployment.

| Locale | Phase | Glossary | Editorial | Fonts | Textures | Build | Runtime | Visual | Release | Blocker / next action |
|---|---|---|---|---|---|---|---|---|---|---|
| en | source mode | source 188 | needs-review | not-applicable | not-applicable | passed | passed | not-run | not-run | Expand runtime coverage beyond launch and panel injection |
| ar | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| bg | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| cs | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| de | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| el | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| es | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| es-419 | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| fa | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| fil | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| fr | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| he | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| hi | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| hu | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| id | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| it | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| ja | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| ko | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| nl | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| pl | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| pt-BR | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| ro | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| ru | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | passed | passed | not-run | Main menu passed on Windows; expand story, tooltip, and combat coverage |
| sr | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| sw | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| th | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| tr | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| uk | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| vi | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| zh | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| zh-TW | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |

This checkpoint records the authorized macOS and Windows runtime work above.
Further source-app mutation, broader visual QA, publication, upload, and
deployment are not authorized by this checkpoint.
