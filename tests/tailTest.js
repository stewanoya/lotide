const tail = require("../tail.js");
const assert = require("chai").assert;
// const assertEqual = require("../assertEqual.js");
// const assertArraysEqual = require("../assertArraysEqual.js");

describe("#tail", () => {
  it("should return [3, 4] when given array ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
});

// assertEqual(result[1], "Labs");
// assertArraysEqual(result, ["Lighthouse", "Labs"]);
