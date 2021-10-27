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
    console.log(`${pass} ${array1} === ${array2}.`);
  } else {
    console.log(`${fail} ${array1} !== ${array2}.`);
  }
};


const middle = (array) => {
  let midIndex = (array.length/2);
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (midIndex % 1 === 0) {
    middleArray.push(array[midIndex - 1])
    middleArray.push(array[midIndex])
  } else {
    middleArray.push(array[Math.floor(midIndex)]);
  }
  return middleArray;
}

testArray = [3, 4, 5];
console.log(middle(testArray))


testArray2 = [4, 5];
testArray3 = [3, 4, 5, 3, 5, 5];

console.log(middle(testArray3));

console.log(assertArraysEqual(middle(testArray3), [5, 3]));
console.log(assertArraysEqual(middle(testArray), [4]));
