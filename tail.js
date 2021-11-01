const assertEqual = function (actual, expected) {
  const pass = "✅✅✅ Assertation Passed: ";
  const fail = "🛑🛑🛑 Assertation Failed: ";
  if (actual !== expected) {
    console.log(`${fail} ${actual} !== ${expected}.`);
  } else {
    console.log(`${pass} ${actual} === ${expected}.`);
  }
};

const tail = (array) => {
  let arrayNew = [];
  for (let i = 1; i < array.length; i++) {
    arrayNew.push(array[i]);
  }
  return arrayNew;
};

module.exports = tail;
