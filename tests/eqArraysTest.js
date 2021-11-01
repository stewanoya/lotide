const eqArrays = require("../eqArrays.js");
const assertEqual = require("../assertEqual.js");
const assertArraysEqual = require("../assertArraysEqual.js");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArrays([1, 4, 3, 5, 6], [1, 4, 3, 4, 6]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
