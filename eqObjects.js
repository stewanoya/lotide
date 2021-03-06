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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEquall(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false