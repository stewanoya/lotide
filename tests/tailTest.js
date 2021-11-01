const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js");
const assertArraysEqual = require("../assertArraysEqual.js");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[1], "Labs");
assertArraysEqual(result, ["Lighthouse", "Labs"]);
