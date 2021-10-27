const eqArrays = (array1, array2) => {

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
   } else {
    return false;
   }
  }
  return true;
}

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (key of Object.keys(object1)) { 
      if (Array.isArray(object1[key])) {
        let arraystatus = eqArrays(object1[key], object2[key]);
        if (!arraystatus) {
          return false;
        }
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  return true;
  } else {
  return false;
  }
};

const assertObjectsEqual = (object1, object2) => {
  const pass = "✅✅✅ Assertation Passed: ";
  const fail =  "🛑🛑🛑 Assertation Failed: ";
  if (eqObjects(object1, object2)) {
    console.log(`${pass} ${object1} === ${object2}.`)
  } else {
    console.log(`${fail} ${object1} !== ${object2}.`)
  }
};

const ab = { a: "1", b: "2" };
const abc = { a: "1", b: "2", c: "3" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false
assertObjectsEqual(eqObjects(ab, ba), true); // => true