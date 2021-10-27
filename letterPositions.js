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

const letterPositions = (sentence) => {
  let finalCount = {};
  
  let noSpaces = sentence.replace(/\s+/g, '');
  for (i = 0; i < sentence.length; i++)  {  
  if (finalCount[sentence[i]]) {
      finalCount[sentence[i]].push(i);
    } else {
      finalCount[sentence[i]] = [i];
    }
  }
  return finalCount;
}

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);