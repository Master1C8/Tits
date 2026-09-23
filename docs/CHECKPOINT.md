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
  checks, 71 Python checks, browser smoke, 31-language source verification).
- macOS archive: `launcher/READY_TO_SHARE/TiTS-Translator-macOS-0.1.3.zip`,
  385,311 bytes, SHA-256
  `00a41f143a4ec8a6d16b9ef02cc2e4e0b022c84b074f6973b276667c7c7c400e`.
- Windows archive: `launcher/READY_TO_SHARE/TiTS-Translator-Windows-0.1.3.zip`,
  11,458,637 bytes, SHA-256
  `c83749ba8fbbbc7a7a04d2e7f150861539a4b4487622179dba59e1b091445f58`.
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
  finalizes evidence, and opens the screenshots folder. In two real macOS
  attempts, the batch saved `en`, `zh`, `ru`, and `es`, then failed on the fifth
  locale, `es-419`, because the helper rejected its numeric region code.
- Version `0.1.3` accepts three-digit numeric region codes in screenshot and
  VN Revival configuration requests and records them accurately in translation
  diagnostics. A mocked capture test now exercises every catalog locale and
  confirms the full 31-file manifest; a separate test covers the `es-419`
  configuration request. The full suite and both package checks passed. Five
  live 31-language batches subsequently completed automated capture, but visual
  review found stat-label overlap and other defects; capture success is not a
  visual pass.
- The TiTS stat-bar presentation now shrinks translated labels within the
  available space and clips only when they still cannot fit, keeping numeric
  values visible. Unit and browser smoke checks passed. The existing 0.1.3
  screenshots predate this change; live visual recapture is pending.
- Follow-up screenshot defects are corrected in the source checkout: compact
  `PHY`/`REF`/`AIM`/`INT`/`WIL`/`LIB` labels retain their exact game abbreviations;
  tray-button text wraps inside the button without covering its hotkey badge;
  provider refusals (including old cached refusals and contextual batches)
  cannot replace game text; capture no longer stamps a visible locale label,
  resets the game text pane to a deterministic edge, and clears pointer hover
  before recording. A refusal leaves source text visible and marks that locale's
  capture as failed rather than presenting a false translation. The full suite
  passes, but the existing screenshots still predate these fixes and live visual
  recapture/review remains pending. No new release archive was built.
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
