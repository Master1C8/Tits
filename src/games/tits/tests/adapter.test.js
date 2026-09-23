"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");

require("../health-labels.js");
require("../adapter.js");
const adapter = globalThis.VNRevivalGameAdapter;

test("TiTS adapter exposes the observed public-build DOM categories", () => {
  assert.match(adapter.categorySelectors.story, /mainTextContainer/);
  assert.match(adapter.categorySelectors.story, /combatOutput/);
  assert.match(adapter.categorySelectors.control, /button/);
  assert.match(adapter.categorySelectors.tooltip, /tooltipWrapper/);
  assert.ok(adapter.contextSelectors.includes(".mainText"));
  assert.ok(adapter.contextSelectors.includes("[role='tooltip']"));
  assert.ok(adapter.privateSelectors.includes(".gameSaveSlot"));
  assert.ok(adapter.privateSelectors.includes("input"));
  assert.ok(adapter.privateSelectors.includes(".keybindDisplay"));
});

test("TiTS adapter reads the version exposed by the game bundle", () => {
  assert.equal(adapter.getGameVersion({ version: "0.9.165" }), "0.9.165");
  assert.equal(adapter.getGameVersion({}), "");
});

test("Hebrew species choice labels use Hebrew script without changing other controls", () => {
  const choices = {
    Ausar: "אוסאר",
    Kaithrit: "קייתריט",
    Leithan: "לייתן",
    Gryvain: "גריוויין",
    Suula: "סולה"
  };
  for (const [source, expected] of Object.entries(choices)) {
    assert.equal(adapter.normalizeControlTranslation(source, source, "he"), expected);
  }
  assert.equal(adapter.normalizeControlTranslation("Ausar Mother", "אמא אוסארית", "he"), "אמא אוסארית");
  assert.equal(adapter.normalizeControlTranslation("Ausar", "Ausar", "ru"), "Ausar");
  assert.equal(adapter.normalizeControlTranslation("Human", "אנושי", "he"), "אנושי");
});

test("compact stat abbreviations stay stable instead of becoming misleading translations", () => {
  const statNode = { parentElement: { matches: (selector) => selector === ".statBarContainer > .statText" } };
  for (const label of ["PHY", "REF", "AIM", "INT", "WIL", "LIB"]) {
    assert.equal(adapter.normalizeTranslation(label, "wrong label", "ru", statNode), label);
  }
  assert.equal(adapter.normalizeTranslation("REF", "Référence", "fr", { parentElement: { matches: () => false } }), "Référence");
});

test("HP health bar has a stable localized label in every target locale", () => {
  const languages = require("../../../languages.json");
  const statNode = { parentElement: { matches: (selector) => selector === ".statBarContainer > .statText" } };
  for (const [language] of languages.filter(([code]) => code !== "en")) {
    assert.notEqual(adapter.localTranslation("HP", language, statNode), "HP", language);
  }
  assert.equal(adapter.localTranslation("HP", "ru", statNode), "ОЗ");
  assert.equal(adapter.localTranslation("HP", "en", statNode), null);
  assert.equal(adapter.localTranslation("HP", "ru", { parentElement: { matches: () => false } }), null);
});

test("tray button labels get scoped wrapping and badge clearance", () => {
  const created = [];
  const previousDocument = global.document;
  global.document = {
    getElementById: () => null,
    createElement: () => ({}),
    head: { appendChild: (node) => created.push(node) }
  };
  const element = {
    matches: (selector) => selector === ".buttonTrayElementContainer .button",
    querySelector: () => ({}),
  };
  try {
    adapter.formatTranslatedElement(element, {});
    assert.equal(created.length, 1);
    assert.match(created[0].textContent, /max-width: calc\(100% - 2\.5em\)/);
    assert.match(created[0].textContent, /white-space: normal/);
    assert.match(created[0].textContent, /data-vnrevival-translated/);
  } finally {
    if (previousDocument === undefined) delete global.document;
    else global.document = previousDocument;
  }
});

test("translated stat labels reserve room for values and shrink before clipping", () => {
  const properties = new Map();
  const label = {
    matches: (selector) => selector === ".statBarContainer > .statText",
    style: { setProperty: (name, value, priority) => properties.set(name, [value, priority]) }
  };
  const value = { getBoundingClientRect: () => ({ width: 30 }) };
  label.parentElement = {
    querySelector: () => value,
    getBoundingClientRect: () => ({ width: 150 })
  };
  const previousDocument = global.document;
  global.document = { createRange: () => ({
    selectNodeContents: () => {},
    getBoundingClientRect: () => ({ width: 180 }),
    detach: () => {}
  }) };
  try {
    adapter.formatTranslatedElement(label, { computedFontSize: "24px" });
    assert.deepEqual(properties.get("max-width"), ["calc(100% - 36px)", "important"]);
    assert.deepEqual(properties.get("white-space"), ["nowrap", "important"]);
    assert.deepEqual(properties.get("overflow"), ["hidden", "important"]);
    assert.deepEqual(properties.get("text-overflow"), ["ellipsis", "important"]);
    assert.deepEqual(properties.get("font-size"), [`${24 * 114 / 180}px`, "important"]);
  } finally {
    if (previousDocument === undefined) delete global.document;
    else global.document = previousDocument;
  }
});
