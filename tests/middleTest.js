const assertArraysEqual = require("../assertArraysEqual.js");
const middle = require("../middle.js");
const assert = require("chai").assert;

describe("#middle", () => {
  it("when given the array [3,4,5] should return [4]", () => {
    assert.deepEqual(middle(testArray), [4]);
  });
  it("when given the array [3, 4, 5, 3, 5, 5] should return [5,3]", () => {
    assert.deepEqual(middle(testArray3), [5, 3]);
  });
});

testArray = [3, 4, 5];
// console.log(middle(testArray));

// testArray2 = [4, 5];
testArray3 = [3, 4, 5, 3, 5, 5];

// console.log(middle(testArray3));
// console.log(assertArraysEqual(middle(testArray3), [5, 3]));
// console.log(assertArraysEqual(middle(testArray), [4]));
