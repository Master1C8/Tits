(function (root) {
  "use strict";

  const adapter = Object.freeze({
    contractVersion: 2,
    privateSelectors: Object.freeze([
      "input", "textarea", "[contenteditable='true']", ".gameSaveSlot",
      ".saveLoadContainer", "[class*='playerName' i]", "[data-tits-private]"
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
    }
  });

  root.VNRevivalGameAdapter = adapter;
})(typeof globalThis !== "undefined" ? globalThis : this);
