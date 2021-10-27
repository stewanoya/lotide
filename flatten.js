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

const flatten = (array) => {
  flatArray = [];
  for (items of array) {
    if (Array.isArray(items)) {
      for (i = 0; i < items.length; i++) {
        flatArray.push(items[i]);
      }
    } else {
      flatArray.push(items);
    }
  }
  return flatArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));