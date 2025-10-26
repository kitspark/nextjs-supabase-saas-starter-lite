import test from "node:test";
import assert from "node:assert/strict";
import { hello } from "../src/index.js";

test("greets the world", () => {
  assert.equal(hello(), "Hello, world!");
});

test("greets a given name", () => {
  assert.equal(hello("Kitspark"), "Hello, Kitspark!");
});
