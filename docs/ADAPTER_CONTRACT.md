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

`adapter.js` exposes contract version 2 with private selectors, story/control/
tooltip categories, context containers, `getGameVersion(window)`, and
`hasSourceText(text, core)`. It must preserve existing DOM elements, React
handlers, links, form values, and save surfaces.

The observed TiTS 0.9.165 surfaces include `.mainTextContainer`, `.mainText`,
`.combatOutput`, `.tooltipWrapper`, `.tooltipBody`, `.mailText`, controls, and
save slots. Player input, editable content, and save-slot text are private and
must never be sent to a provider.
