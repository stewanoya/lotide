const eqArrays = require("./eqArrays");

const assertArraysEqual = (array1, array2) => {
  const pass = "✅✅✅ Assertation Passed: ";
  const fail = "🛑🛑🛑 Assertation Failed: ";
  if (eqArrays(array1, array2)) {
    console.log(`${pass} ${array1} === ${array2}.`);
  } else {
    console.log(`${fail} ${array1} !== ${array2}.`);
  }
};

module.exports = assertArraysEqual;
