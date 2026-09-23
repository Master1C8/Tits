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
  385,154 bytes, SHA-256
  `ecaa83639cd74bc3dc269e1d90c318c6d7661301e058cbf74cc8a4392f97c8d5`.
- Windows archive: `launcher/READY_TO_SHARE/TiTS-Translator-Windows-0.1.0.zip`,
  11,458,373 bytes, SHA-256
  `066cd5f9def1a71dddfc3de9d431c22ab014951a0ee601bcee92ea07b12c0520`.
- `./scripts/build-tits.sh` passed archive checksum, universal macOS controller,
  Windows PE32+ x86-64, signing-integrity, package-content, and product gates.
- Official game archive inspection passed, but real installation, game launch,
  CDP attachment, runtime interaction, and visual QA remain `not-run`.

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
