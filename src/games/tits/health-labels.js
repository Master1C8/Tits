(function (root) {
  "use strict";

  // Short health-bar labels for the game's exact HP stat. Keep this narrow:
  // story text, tooltips, and other uses of HP remain provider-controlled.
  root.VNRevivalTitsHealthLabels = Object.freeze({
    ar: "صحة", bg: "ЗДР", cs: "ŽIV", de: "LP", el: "ΥΓ", es: "PV",
    "es-419": "PV", fa: "جان", fil: "Buhay", fr: "PV", he: "חיים",
    hi: "जीवन", hu: "ÉP", id: "Nyawa", it: "PV", ja: "体力",
    ko: "체력", nl: "LP", pl: "PŻ", "pt-BR": "PV", ro: "PV",
    ru: "ОЗ", sr: "ЗДР", sw: "Uhai", th: "พลังชีวิต", tr: "Can",
    uk: "ОЗ", vi: "Máu", zh: "生命", "zh-TW": "生命"
  });
})(typeof globalThis !== "undefined" ? globalThis : this);
