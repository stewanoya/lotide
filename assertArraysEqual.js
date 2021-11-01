const eqArrays = require("./eqArrays");

const assertArraysEqual = (array1, array2) => {
  const pass = "✅✅✅ Assertation Passed: ";
  const fail = "🛑🛑🛑 Assertation Failed: ";
  if (eqArrays(array1, array2)) {
    return `${pass} ${array1} === ${array2}.`;
  } else {
    return `${fail} ${array1} !== ${array2}.`;
  }
};

module.exports = assertArraysEqual;
