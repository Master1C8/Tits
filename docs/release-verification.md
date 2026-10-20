# Published release verification

Windows and universal macOS packages were published on October 20, 2026.
Download the platform ZIP, evidence ZIP and `PUBLICATION-SHA256SUMS` from
[the published release](https://github.com/Master1C8/Tits/releases/tag/release-0.1.4-66988afff8cf).

Compare each downloaded ZIP against its checksum line using `shasum -a 256`
on macOS or `Get-FileHash <file> -Algorithm SHA256` on Windows. If all ZIPs
are downloaded, `shasum -a 256 -c PUBLICATION-SHA256SUMS` verifies the full set.

```text
a0b65748fda36009f46116bb97653bd9d17154070c4683f66baf5290e748fdc0  TiTS-Translator-Windows-0.1.4.zip
6913deb904a88cbd21a381f7e8b0f8079f7267ab8cfb7a49955becd499010a58  TiTS-Translator-macOS-0.1.4.zip
b7bd9aedd44079e4627a9140761ddba7ca8450d67a62644c225c887e3fce0792  TiTS-0.1.4-66988afff8cf-evidence.zip
```

Actual build source: [`66988afff8cf7ec870efa75115b9302970ac14f5`](https://github.com/Master1C8/Tits/commit/66988afff8cf7ec870efa75115b9302970ac14f5).
Match it with the tag, `provenance.json` and each installer ZIP's root
`vnrevival-release.json`; do not substitute the latest repository HEAD.
The source listing, build log and material hashes identify the compilation
and recorded test boundaries.

Locally built Windows x86-64 and universal Apple Silicon / Intel macOS packages.
Actual source commit: `66988afff8cf7ec870efa75115b9302970ac14f5`.

Download the desired platform ZIP, `TiTS-0.1.4-66988afff8cf-evidence.zip` and `PUBLICATION-SHA256SUMS`.
Compare SHA-256 with the checksum file, then inspect the evidence ZIP.
`provenance.json`, the platform `*-vnrevival-release.json`, the installer archive's
root `vnrevival-release.json` and this release tag identify the same source commit.
`source-tree.txt` and `build.log` record compilation, full isolated test results and
package verification. The recorded tools include the selected official Swift
compiler distribution, frontend, compatibility libraries and SDK.

The unchanged Python runtime input is identified by official download URL and hash.
Both ZIPs were compared file by file with their final stages. Tests cover the local
translator and mocked provider/browser interactions; no new real-game run or paid
translation request is claimed. The macOS deployment target remains 12.0; no runtime
check on macOS 12 was performed and SDK linker diagnostics remain in the build log.
macOS is ad hoc signed, without notarization. This is an unsigned local build record,
not a GitHub build attestation or independent security review.

Historical build records retain their original dates and statuses. Earlier
archives without a retained build record keep unknown exact source provenance.
