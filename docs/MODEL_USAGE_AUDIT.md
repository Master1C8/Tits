# TiTS development model usage audit

Cutoff: 2026-09-23 16:16:16 UTC, immediately before the request to update
site Model usage. Scope: the Codex Desktop project session that created and
maintained this TiTS translator and nine automatic review sessions with the
same canonical working directory. Earlier CoC2 development and unrelated
SiteForMods work are outside this project boundary. The current recount/site
sync and platform overhead without session token telemetry are not included.

Source session IDs:

- Coordinator: `01a0cd23-2a60-7a70-b896-19684334fb19`.
- Automatic review: `01a0cd2c-3ed5-7011-b128-39814123a922`,
  `01a0cd2f-eb61-7021-8a2e-549b155ff537`,
  `01a0cd50-73bf-7cd2-8e9d-aaeb42950e60`,
  `01a0cd9b-e09c-7e61-9df5-54f6a19fc767`,
  `01a0cdb5-41fc-7290-bb81-964c96886e14`,
  `01a0cdc6-b098-7d42-b887-7bf59043401c`,
  `01a0ceb0-bd3a-7922-859e-bf2cfefcddd8`,
  `01a0cecc-d4d6-7113-8898-f75f4bb23bd3`, and
  `01a0cf03-4ad3-7992-88fa-8b58a6ccdeb9`.

The original audit summed nonduplicate `token_count.last_token_usage` events.
The update uses nonoverlapping cumulative deltas for each session and task
window, avoiding five repeated cumulative coordinator events after the prior
cutoff. Every counted request reported input, cached input, output, and
reasoning tokens. The coordinator sum exactly matches its cumulative counter
at the new cutoff. Cached input is part of input; reasoning is part of output.
Neither is added twice. The task boundaries are:

- Engineering: 07:20:50–08:16:28 UTC.
- Runtime and visual QA: 08:16:28–09:52:35 UTC.
- GitHub setup check: 09:52:35–09:53:23 UTC.
- Version 0.1.1 maintenance and usage accounting: 09:53:23–10:04:04 UTC.
- Screenshot-batch engineering and runtime fixes: 10:04:04–13:54:49 UTC.
- Screenshot visual QA, UI fixes, and cleanup: 13:54:49–16:16:16 UTC.

| Row | Task | Model | Requests | Input | Cached input | Output | Reasoning | Total |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| A1 | Engineering | gpt-5.6-sol | 153 | 23,229,368 | 22,952,576 | 57,187 | 18,076 | 23,286,555 |
| Q1 | Runtime QA | gpt-5.6-sol | 267 | 30,573,448 | 30,273,536 | 65,585 | 28,032 | 30,639,033 |
| G1 | GitHub check | gpt-6-sol | 3 | 228,865 | 158,592 | 956 | 479 | 229,821 |
| M1 | Maintenance and accounting | gpt-6-sol | 39 | 5,748,703 | 5,641,984 | 18,314 | 10,101 | 5,767,017 |
| A2 | Engineering review | codex-auto-review | 13 | 472,111 | 342,784 | 1,532 | 760 | 473,643 |
| Q2 | Runtime QA review | codex-auto-review | 123 | 11,993,950 | 11,387,136 | 10,892 | 3,757 | 12,004,842 |
| M2 | Maintenance review | codex-auto-review | 4 | 106,053 | 82,944 | 490 | 270 | 106,543 |
| A3 | Screenshot-batch engineering and runtime fixes | gpt-6-sol | 92 | 11,716,233 | 11,557,632 | 43,132 | 22,174 | 11,759,365 |
| A4 | Engineering review | codex-auto-review | 21 | 1,016,775 | 893,696 | 2,376 | 1,078 | 1,019,151 |
| Q3 | Screenshot visual QA, UI fixes, and cleanup | gpt-6-sol | 297 | 31,102,270 | 30,011,776 | 104,918 | 53,329 | 31,207,188 |
| Q4 | Screenshot QA review | codex-auto-review | 26 | 1,107,412 | 941,568 | 3,101 | 1,380 | 1,110,513 |
| **Total** | | | **1,038** | **117,295,188** | **114,244,224** | **308,483** | **139,436** | **117,603,671** |

Rows A3 and Q3 include some inseparable coordinator work across user requests;
the task labels identify their dominant scope rather than claiming a finer
split. Rows A4 and Q4 include only the named review sessions. The manifest is
`data/model-usage-2026-09-23.json`. No actual monetary charge was reported in
the source sessions, so it contains no `actualCostUsd` values. The site's
standard API-equivalent estimate is separate and partial for models without a
verified public API rate.

Production publication remains pending: the guarded `./vnrevival game
model-usage sync trials-in-tainted-space ... --dry-run` verified the transferred
manifest but refused to read or write private rows because the live SiteForMods
revision `f848c32804c4` differs from local `main` `e836bdc3ea3f`. This audit
does not authorize a site deployment, and no Model usage change was applied.
