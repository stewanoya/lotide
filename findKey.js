const assertEqual = function (actual, expected) {
  const pass = "✅✅✅ Assertation Passed: ";
  const fail = "🛑🛑🛑 Assertation Failed: ";
  if (actual !== expected) {
    console.log(`${fail} ${actual} !== ${expected}.`);
  } else {
    console.log(`${pass} ${actual} === ${expected}.`);
  }
};

const findKey = (object, callBack) => {
  for (keys in object) {
    if (callBack(object[keys])) {
      return keys;
    }
  }
};

let result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);

assertEqual(result, "noma");

// A function that takes an object and a callback
// a loop to go through each object
// as it goes through, it should check if the object matches the result of the callback function
// if it matches, it should return that key
// if it fails undefined aka do nothing
