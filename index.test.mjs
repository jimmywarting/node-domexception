import test from "node:test";
import assert from "node:assert";
import "./index.js";

test("DOMException", () => assert(DOMException));
test("new DOMException()", () => assert(new DOMException()));
