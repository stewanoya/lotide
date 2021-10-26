const assertEqual = function(actual, expected) {
  const pass = "✅✅✅ Assertation Passed: "
  const fail =  "🛑🛑🛑 Assertation Failed: "
  if (actual !== expected) {
    console.log(`${fail} ${actual} !== ${expected}.`);
  } else {
    console.log(`${pass} ${actual} === ${expected}.`);
  }
};

const eqArrays = (array1, array2) => {

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
   } else {
    return false;
   }
  }
  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArrays([1, 4, 3, 5, 6], [1, 4, 3, 4, 6]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);