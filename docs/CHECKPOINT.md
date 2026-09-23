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

- Full suite: `./scripts/test-tits.sh --quiet` passed on 2026-09-23 (37 Node
  checks, 69 Python checks, browser smoke, 31-language source verification).
- macOS archive: `launcher/READY_TO_SHARE/TiTS-Translator-macOS-0.1.0.zip`,
  385,056 bytes, SHA-256
  `f0ba3b1d982a3609236b004dbfe4ec8132d3e217ca591276999ea45195c530b2`.
- Windows archive: `launcher/READY_TO_SHARE/TiTS-Translator-Windows-0.1.0.zip`,
  11,458,373 bytes, SHA-256
  `8bc3cb558e46c460271f2b35574171022773afac32e43a32e8a6cd80aa45f5c6`.
- `./scripts/build-tits.sh` passed archive checksum, universal macOS controller,
  Windows PE32+ x86-64, signing-integrity, package-content, and product gates.
- Official game archive inspection passed. A clean real macOS launch, local
  helper startup, CDP attachment, and visible translator-panel check passed on
  2026-09-23. Provider-backed translation, language-specific runtime checks,
  and visual QA remain `not-run`.

| Locale | Phase | Glossary | Editorial | Fonts | Textures | Build | Runtime | Visual | Release | Blocker / next action |
|---|---|---|---|---|---|---|---|---|---|---|
| en | source mode | source 188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Complete static build checks; authorize live QA separately |
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
| ru | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| sr | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| sw | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| th | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| tr | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| uk | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| vi | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| zh | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |
| zh-TW | real-time | 188/188 | needs-review | not-applicable | not-applicable | passed | not-run | not-run | not-run | Same shared app gate |

Source-app mutation, real installation, runtime launch, visual QA, publication,
upload, and deployment are not authorized by this checkpoint.
