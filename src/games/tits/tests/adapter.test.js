"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");

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
});

test("TiTS adapter reads the version exposed by the game bundle", () => {
  assert.equal(adapter.getGameVersion({ version: "0.9.165" }), "0.9.165");
  assert.equal(adapter.getGameVersion({}), "");
});
