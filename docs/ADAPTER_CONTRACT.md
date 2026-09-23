# TiTS game-adapter contract

Shared runtime code must not know the game title, selectors, executable names,
bundle identifier, site slug, or cache namespace. Those values live under
`src/games/tits/`.

`game.json` supplies:

- product identity, source language, supported versions and VN Revival slug;
- strict CDP title/URL hints;
- isolated localStorage and IndexedDB namespaces;
- Windows executable identity and optional Steam AppID (`0` means non-Steam);
- native macOS game bundle identifier and executable;
- translator bundle identity, icons, archive names, and panel theme.
- an optional short translation setting appended to the default AI system
  prompt, including a locale-specific prompt loaded from the site.

`adapter.js` exposes contract version 2 with private selectors, story/control/
tooltip categories, context containers, `getGameVersion(window)`, and
`hasSourceText(text, core)`. Its optional `normalizeControlTranslation(source,
translation, language)` hook can enforce a game-specific label after a provider
response; it must leave unrelated controls unchanged. An optional
`localTranslation(source, language, node)` hook may resolve exact, context-bound
UI labels without a provider request; it returns `null` for unhandled text. The
TiTS health-bar labels are isolated in `health-labels.js`. The adapter must
preserve existing DOM elements, React handlers, links, form values, and save
surfaces.
An optional `describeTranslationContext(source, kind, nearby, node)` hook may
return a short, stable semantic location for a visible fragment. The runtime
provides only already-filtered nearby source text. The location participates
in cache identity; nearby text is an untrusted disambiguation hint in AI
requests, not text to translate. Keep game-specific meanings in the adapter.
An optional `formatTranslatedElement(element, originalPresentation)` hook may
adjust game-specific presentation after text replacement; every inline style it
changes must be tracked and restored by the shared runtime.

The observed TiTS 0.9.165 surfaces include `.mainTextContainer`, `.mainText`,
`.combatOutput`, `.tooltipWrapper`, `.tooltipBody`, `.mailText`, controls, and
save slots. Player input, editable content, and save-slot text are private and
must never be sent to a provider.
