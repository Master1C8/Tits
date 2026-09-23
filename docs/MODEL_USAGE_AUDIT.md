# TiTS development model usage audit

Cutoff: 2026-09-23 10:04:04 UTC, after the `0.1.1` build passed. Scope: the
Codex Desktop project session that created this TiTS translator and five
automatic review sessions with the same canonical working directory. Earlier
CoC2 development and unrelated SiteForMods work are outside this project
boundary. Later requests, the site sync itself, and platform overhead without
session token telemetry are not included.

Source session IDs:

- Coordinator: `01a0cd23-2a60-7a70-b896-19684334fb19`.
- Automatic review: `01a0cd2c-3ed5-7011-b128-39814123a922`,
  `01a0cd2f-eb61-7021-8a2e-549b155ff537`,
  `01a0cd50-73bf-7cd2-8e9d-aaeb42950e60`,
  `01a0cd9b-e09c-7e61-9df5-54f6a19fc767`, and
  `01a0cdb5-41fc-7290-bb81-964c96886e14`.

The audit summed each nonduplicate `token_count.last_token_usage` event by
session, model, and nonoverlapping UTC task window. Three repeated cumulative
events were ignored. Every counted event reported input, cached input, output,
and reasoning tokens. The coordinator sum exactly matches its final cumulative
counter at the cutoff. Cached input is part of input; reasoning is part of
output. Neither is added twice. The task boundaries are:

- Engineering: 07:20:50–08:16:28 UTC.
- Runtime and visual QA: 08:16:28–09:52:35 UTC.
- GitHub setup check: 09:52:35–09:53:23 UTC.
- Version 0.1.1 maintenance and usage accounting: 09:53:23–10:04:04 UTC.

| Row | Task | Model | Requests | Input | Cached input | Output | Reasoning | Total |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| A1 | Engineering | gpt-5.6-sol | 153 | 23,229,368 | 22,952,576 | 57,187 | 18,076 | 23,286,555 |
| Q1 | Runtime QA | gpt-5.6-sol | 267 | 30,573,448 | 30,273,536 | 65,585 | 28,032 | 30,639,033 |
| G1 | GitHub check | gpt-6-sol | 3 | 228,865 | 158,592 | 956 | 479 | 229,821 |
| M1 | Maintenance and accounting | gpt-6-sol | 39 | 5,748,703 | 5,641,984 | 18,314 | 10,101 | 5,767,017 |
| A2 | Engineering review | codex-auto-review | 13 | 472,111 | 342,784 | 1,532 | 760 | 473,643 |
| Q2 | Runtime QA review | codex-auto-review | 123 | 11,993,950 | 11,387,136 | 10,892 | 3,757 | 12,004,842 |
| M2 | Maintenance review | codex-auto-review | 4 | 106,053 | 82,944 | 490 | 270 | 106,543 |
| **Total** | | | **602** | **72,352,498** | **70,839,552** | **154,956** | **61,475** | **72,507,454** |

The manifest is `data/model-usage-2026-09-23.json`. No actual monetary charge
was reported in the source sessions, so it contains no `actualCostUsd` values.
The site's standard API-equivalent estimate is a separate calculation and is
partial for models without a verified public API rate.
