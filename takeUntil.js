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

const takeUntil = (array, callBack) => {
  newArray = [];
  for (item of array) {
    if (callBack(item)) {
      console.log(newArray);
      return newArray;
    } else {
      newArray.push(item);
    }
  }
  console.log(newArray);
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

//comment out the logic first

// the function will take 2 parameters, an array and a callBack
// i need a new array to store "taken" items
// I need to loop through the array
// in the loop, I need to check against my stop condition, in this case, a callback
// if it passes the stop condition, I need to store that item into new array
// when it fails the stop condition, i need to return the new array
