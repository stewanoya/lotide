let map = (array, callback) => {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
    } else {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (array1, array2) => {
  const pass = "✅✅✅ Assertation Passed: ";
  const fail = "🛑🛑🛑 Assertation Failed: ";
  if (eqArrays(array1, array2)) {
    console.log(`${pass} ${array1} === ${array2}.`);
  } else {
    console.log(`${fail} ${array1} !== ${array2}.`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word);
console.log(results1);

assertArraysEqual(words, results1);
