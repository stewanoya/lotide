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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 4]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, "2", 3]));