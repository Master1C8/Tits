# TiTS Translator user guide

## Install and start

1. Download and install the official public build of Trials in Tainted Space.
2. Close the game if it is running.
3. On macOS, open `TiTS Translator.app`. It locates the native TiTS application
   by bundle identifier; if discovery fails, select the official `.app`.
4. On Windows, fully extract the translator ZIP, run `TiTS Translator.exe`, and
   select the official TiTS Windows EXE when prompted.
5. Always start the game through the translator when translation is needed.

The game files and saves are not modified. Settings stay in the game renderer,
the translation cache stays in its IndexedDB origin, and provider keys use
Keychain or Windows Credential Manager through an authenticated loopback helper.

## Controls

- Choose a target language from the shared VN Revival language list.
- Enable automatic translation or use the Translate action / `Ctrl+Shift+T`.
- Show the original at any time; changing language restores source text before
  translating again.
- Google works without a key. OpenAI-compatible presets require their own key,
  endpoint/model configuration, and provider availability.
- The UI toggle localizes only the translator panel.
- Batch screenshots are an opt-in workstation feature. The button and number
  field are hidden unless a `.enable-screenshot-batches` marker file exists in
  the translator's local data directory. On macOS this is
  `~/Library/Application Support/VN Revival/TiTS Translator/`; on Windows it is
  `%LOCALAPPDATA%\VN Revival\TiTS Translator\`. The marker is not included in
  shared packages. Restart the translator after changing the marker. This is
  an accidental-use guard, not a security boundary.
- When enabled, to save a screenshot in every supported language, enter a screenshot number
  (1–999) and click `Capture all languages`. Keep the game on the same game
  screen until the batch finishes; switching to another app does not cancel
  the capture. The screenshots folder opens when
  complete. The translator restores your previous language and auto-translate
  setting afterward. The helper must be running for this control to be enabled.
- Clear cache and log removes translator cache/log data without touching saves.

When English is selected, the translator shows the original and sends no
translation request. Machine-generated output is not an editor-reviewed static
localization. Provider failures must not clear or break the game screen.
In Hebrew, the Ausar, Kaithrit, Leithan, Gryvain, and Suula choice buttons use
Hebrew script even when a translation service preserves their Latin names.
OpenAI-compatible translation now receives the visible fragment's UI role,
semantic location, and nearby source text as disambiguation hints. The hints
are not translated or displayed. Google does not accept a separate system
prompt, so it continues to translate the source text directly. Short control
labels use context-aware cache entries, preventing translations from one
control location from being reused at another. The bundled AI prompt asks the
model to infer ambiguous terms from context instead of memorizing example
answers; glossary mappings apply only when their meaning fits that context.
The default AI prompt also identifies TiTS as a parody space RPG with adult
content, while instructing the model not to add humor or erotic detail that
is absent from the source. This game background is included even when a
locale-specific system prompt is loaded from VN Revival. A custom prompt you
write yourself remains under your control.
Long translated stat labels shrink to fit the game's narrow sidebar bars. If a
label is still too long to remain legible, the bar clips it rather than letting
it overlap the numeric value.
The exact `HP` health-bar label uses a stable short translation in each target
language; shortcut badges such as `Esc` and `F1` stay as physical key names.
Combat captures start at the beginning of the log. Long scrollable game pages
may still need another capture at a different scroll position to show all text.

If the panel does not appear, close TiTS completely and launch it through the
translator again. Keep the whole Windows package together; do not move only the
EXE. Closing the game normally also ends the launcher and local helper.
