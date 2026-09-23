# CoC2 base adaptation

- Base checkout: `/Users/antonkrutov/Desktop/coc2-translation-mod`
- Base revision: `57990eadca2da490ee6286b6340e56082d495073`
- Base version: `0.11.3`
- Target project: `/Users/antonkrutov/Desktop/Tits`
- Target game/build: Trials in Tainted Space public `0.9.165`

Reused unchanged in principle: translation core, 31-language catalog, provider
registry, panel, runtime queue/cancellation/cache, authenticated helper, Swift
CDP controller, Windows CDP launcher, packaging safeguards, and isolated tests.

Adapted: identity/branding, TiTS DOM selectors, cache namespace, site slug,
native macOS discovery/launch, non-Steam Windows launch, game-specific tests,
documentation, icon, and build/test entry points.

The original CoC2 checkout was read-only and remains unmodified.
