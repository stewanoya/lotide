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
  const fail =  "🛑🛑🛑 Assertation Failed: ";
  if (eqArrays(array1, array2)) {
    console.log(`${pass} ${array1} === ${array2}.`)
  } else {
    console.log(`${fail} ${array1} !== ${array2}.`)
  }
}

const without = (array, itemsRemoved) => {
  let newArray = [];
  let condition = true;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < itemsRemoved.length; j++) {
        condition = true;
        if (array[i] !== itemsRemoved[j]) {
          condition = false;
        }
      }
      if (condition === false) {
      newArray.push(array[i]);
      }
    }
  return newArray;
}



console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without( ["hello", "world", "lighthouse"], ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"])