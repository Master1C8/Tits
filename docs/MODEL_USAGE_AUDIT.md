# TiTS development model usage audit

## Version 0.1.4 release-build measurement

Cutoff: 2026-09-23 20:31:56.022 UTC, after both version 0.1.4 archives were
built and verified. The new complete replacement manifest is
`data/model-usage-2026-09-24.json`. It retains all 11 earlier records and adds
five nonoverlapping records from the coordinator and three additional
automatic-review sessions. Subsequent site administration and the unmeasured
reporting tail are excluded; this is a measured development subtotal, not a
claim about monetary charges or complete Codex platform overhead.

| Row | Scope | Model | Input | Cached input | Output | Reasoning | Total |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| A5 | Screenshot controls, runtime fixes, icon, translation maintenance | gpt-6-sol | 25,010,044 | 24,523,776 | 75,670 | 39,799 | 25,085,714 |
| A6 | Translation context and prompt engineering | gpt-6-sol | 16,487,164 | 16,255,616 | 53,599 | 28,016 | 16,540,763 |
| P1 | Screenshot site publication and release preparation | gpt-6-sol | 9,393,806 | 9,198,336 | 9,205 | 3,099 | 9,403,011 |
| A7 | Version 0.1.4 release build | gpt-6-sol | 7,766,878 | 7,715,072 | 9,524 | 4,289 | 7,776,402 |
| A8 | Automated review of post-audit work | codex-auto-review | 2,218,179 | 1,977,344 | 4,002 | 1,594 | 2,222,181 |
| **Added** | | | **60,876,071** | **59,670,144** | **152,000** | **76,797** | **61,028,071** |
| **All 16 records** | | | **178,171,259** | **173,914,368** | **460,483** | **216,233** | **178,631,742** |

The coordinator rows are successive differences between cumulative
`token_count` snapshots in session
`01a0cd23-2a60-7a70-b896-19684334fb19`: 16:16:16.017, 18:33:03.475,
19:45:37.004, 20:14:35.750, and 20:31:56.022 UTC. The review row sums
complete sessions `01a0cf3b-d68b-7241-98e8-4b76a20272d0`,
`01a0cf85-1c08-7643-83f3-67ed874523ea`, and
`01a0cfc3-244e-78a2-b4fe-fb482618c917`, each exactly once. Row A5 and P1
are mixed work windows; their labels do not assert more precise attribution.
Cached input is a subset of input, and reasoning a subset of output.

## Earlier snapshot (preserved)

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

At that earlier snapshot, production publication was pending because the
guarded site CLI reported a live/local revision mismatch. This historical
status does not describe the newer release-build measurement above.
