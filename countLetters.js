const assertEqual = function(actual, expected) {
  const pass = "✅✅✅ Assertation Passed: "
  const fail =  "🛑🛑🛑 Assertation Failed: "
  if (actual !== expected) {
    console.log(`${fail} ${actual} !== ${expected}.`);
  } else {
    console.log(`${pass} ${actual} === ${expected}.`);
  }
};

const countLetters = (str) => {
  let flattened = str.replace(/\s+/g, '');
  count = {};
  for (letters of flattened) {
    if (count[letters]) {
      count[letters] += 1
    } else {
      count[letters] = 1
    }
  }
  return count;
}

console.log(countLetters("lighthouse in the house"));
console.log(countLetters('LHL'));