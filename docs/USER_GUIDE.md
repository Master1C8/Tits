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
- Clear cache and log removes translator cache/log data without touching saves.

When English is selected, the translator shows the original and sends no
translation request. Machine-generated output is not an editor-reviewed static
localization. Provider failures must not clear or break the game screen.

If the panel does not appear, close TiTS completely and launch it through the
translator again. Keep the whole Windows package together; do not move only the
EXE. Closing the game normally also ends the launcher and local helper.
