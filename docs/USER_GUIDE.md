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
- To save a screenshot in every supported language, enter a screenshot number
  (1–999) and click `Capture all languages`. Keep the game on the screen you
  want to capture until the batch finishes; the screenshots folder opens when
  complete. The translator restores your previous language and auto-translate
  setting afterward. The helper must be running for this control to be enabled.
- Clear cache and log removes translator cache/log data without touching saves.

When English is selected, the translator shows the original and sends no
translation request. Machine-generated output is not an editor-reviewed static
localization. Provider failures must not clear or break the game screen.
In Hebrew, the Ausar, Kaithrit, Leithan, Gryvain, and Suula choice buttons use
Hebrew script even when a translation service preserves their Latin names.
Long translated stat labels shrink to fit the game's narrow sidebar bars. If a
label is still too long to remain legible, the bar clips it rather than letting
it overlap the numeric value.

If the panel does not appear, close TiTS completely and launch it through the
translator again. Keep the whole Windows package together; do not move only the
EXE. Closing the game normally also ends the launcher and local helper.
