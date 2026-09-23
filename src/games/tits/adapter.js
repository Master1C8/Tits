(function (root) {
  "use strict";

  const hebrewControlLabels = Object.freeze({
    Ausar: "אוסאר",
    Kaithrit: "קייתריט",
    Leithan: "לייתן",
    Gryvain: "גריוויין",
    Suula: "סולה"
  });
  const compactStats = new Set(["PHY", "REF", "AIM", "INT", "WIL", "LIB"]);
  const healthLabels = root.VNRevivalTitsHealthLabels || Object.freeze({});
  const trayStyleId = "vnrevival-tits-tray-label-style";

  function ensureTrayLabelStyle() {
    if (document.getElementById(trayStyleId)) return;
    const style = document.createElement("style");
    style.id = trayStyleId;
    // The game's .btnTxt is nowrap with a fixed em width. Restrict it to the
    // button interior so long translations cannot paint over the key badge.
    style.textContent = `
      .buttonTrayElementContainer .button[data-vnrevival-translated="true"] > .btnTxt {
        display: block !important;
        max-width: calc(100% - 2.5em) !important;
        margin: 0 auto !important;
        white-space: normal !important;
        overflow: hidden !important;
        overflow-wrap: anywhere !important;
        line-height: 1.1 !important;
      }
    `;
    document.head.appendChild(style);
  }

  function fitTranslatedStatLabel(element, original) {
    if (!element.matches(".statBarContainer > .statText")) return;
    const bar = element.parentElement;
    const value = bar.querySelector(":scope > .statValue");
    const barWidth = bar.getBoundingClientRect().width;
    const valueWidth = value && value.getBoundingClientRect().width;
    const baseSize = Number.parseFloat(original.computedFontSize);
    if (!barWidth || !valueWidth || !baseSize) return;

    // TiTS positions both strings absolutely in a one-line bar. Wrapping cannot
    // prevent a translated name from painting over the numeric value.
    const available = Math.max(0, barWidth - valueWidth - 6);
    if (!available) return;
    element.style.setProperty("display", "block", "important");
    element.style.setProperty("white-space", "nowrap", "important");
    element.style.setProperty("max-width", `calc(100% - ${valueWidth + 6}px)`, "important");
    element.style.setProperty("overflow", "hidden", "important");
    element.style.setProperty("text-overflow", "ellipsis", "important");
    element.style.setProperty("font-size", `${baseSize}px`, "important");

    const range = document.createRange();
    range.selectNodeContents(element);
    const textWidth = range.getBoundingClientRect().width;
    range.detach?.();
    if (textWidth > available) {
      const fittedSize = Math.min(baseSize, Math.max(12, baseSize * available / textWidth));
      element.style.setProperty("font-size", `${fittedSize}px`, "important");
    }
  }

  const adapter = Object.freeze({
    contractVersion: 2,
    privateSelectors: Object.freeze([
      "input", "textarea", "[contenteditable='true']", ".gameSaveSlot",
      ".saveLoadContainer", "[class*='playerName' i]", "[data-tits-private]",
      ".keybindDisplay"
    ]),
    categorySelectors: Object.freeze({
      story: ".mainText,.mainTextContainer,.combatOutput,.mailText,.dropDescText,.bustText,.scene,.story,.output,.eventText,.sceneText",
      control: "button,[role='button'],a,[role='link'],select,.btn,.button,.squareButton",
      tooltip: ".tooltipWrapper,.tooltipBody,[role='tooltip'],[class*='tooltip' i],[class*='hover' i]"
    }),
    contextSelectors: Object.freeze([
      "button", "[role='button']", "a", "[role='link']", "select", "p", "li",
      "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", ".mainText",
      ".mainTextContainer", ".combatOutput", ".mailText", ".dropDescText",
      ".tooltipWrapper", ".tooltipBody", "[role='tooltip']", "[class*='hover' i]"
    ]),
    getGameVersion(gameWindow) {
      return String(gameWindow && gameWindow.version || "");
    },
    hasSourceText(value, core) {
      return core.hasEnglishText(value);
    },
    describeTranslationContext(source, kind, nearby, node) {
      const label = String(source || "").trim();
      if (kind === "control" && label === "Credits"
          && nearby.includes("New Game") && nearby.includes("Options")) {
        return "main menu navigation; Credits opens staff acknowledgments, not currency";
      }
      const element = node?.parentElement;
      if (element?.closest(".combatOutput")) return "combat log";
      if (element?.closest(".statBarContainer")) return "character statistics";
      if (element?.closest(".buttonTrayElementContainer")) return "game action button";
      return "";
    },
    localTranslation(source, language, node) {
      if (String(source || "").trim() !== "HP"
          || !node?.parentElement?.matches(".statBarContainer > .statText")) return null;
      return Object.prototype.hasOwnProperty.call(healthLabels, language)
        ? healthLabels[language] : null;
    },
    normalizeTranslation(source, translation, _language, node) {
      const label = String(source || "").trim();
      if (!node?.parentElement?.matches(".statBarContainer > .statText")) return translation;
      if (compactStats.has(label)) return source;
      return translation;
    },
    normalizeControlTranslation(source, translation, language) {
      if (language !== "he") return translation;
      const label = String(source || "").trim();
      return Object.prototype.hasOwnProperty.call(hebrewControlLabels, label)
        ? hebrewControlLabels[label] : translation;
    },
    formatTranslatedElement(element, original) {
      if (element.matches(".buttonTrayElementContainer .button") && element.querySelector(":scope > .btnTxt")) {
        ensureTrayLabelStyle();
      }
      fitTranslatedStatLabel(element, original);
    }
  });

  root.VNRevivalGameAdapter = adapter;
})(typeof globalThis !== "undefined" ? globalThis : this);
