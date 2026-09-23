# Architecture

```text
src/games/tits/game.json
  -> game identity, launch metadata, strict CDP target matchers, translation setting
TiTS Translator.app / TiTS Translator.exe
  -> starts the official public Electron game with loopback CDP
  -> starts an authenticated loopback credential/provider helper
  -> injects only into the matching TiTS page
translator.bundle.js
  -> shared runtime + generated config + TiTS DOM adapter
runtime
  -> visible/changed Text nodes -> cache -> selected provider -> Text nodes
```

macOS discovers the native app by `com.fenoxo.tits`, validates its Info.plist
and executable, launches it with `open -na ... --args`, and uses the universal
Swift CDP controller. Windows prompts for and remembers the downloaded TiTS EXE
and uses the Win32/WinHTTP launcher. Both bind CDP and the helper to loopback.

The runtime preserves cancellation, stale-response checks, original text,
provider errors, language formatting, site prompt/glossary loading, secure
credential storage, cache partitioning, and helper lifecycle from the CoC2
base. Cache keys include game, locale, provider, model, prompt, and relevant
settings. A failed or structurally broken provider response is never cached as
success.

AI translation requests include a bounded, untrusted context note with the
fragment's UI role, semantic location, and nearby visible source text. The
game-specific setting is appended to the default system prompt, including
locale defaults from the site, without changing user-authored custom prompts.
The location separates cache entries for short ambiguous controls. Google has no
separate instruction channel, so its request body remains the exact source
text; short controls still use context-partitioned cache entries, and known
semantic locations can be handled by the game adapter.

The project contains no asset extractor, static pack, game payload, provider
model, or production deployment path.
