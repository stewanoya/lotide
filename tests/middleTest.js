const assertArraysEqual = require("../assertArraysEqual.js");
const middle = require("../middle.js");

testArray = [3, 4, 5];
console.log(middle(testArray));

testArray2 = [4, 5];
testArray3 = [3, 4, 5, 3, 5, 5];

console.log(middle(testArray3));
console.log(assertArraysEqual(middle(testArray3), [5, 3]));
console.log(assertArraysEqual(middle(testArray), [4]));
