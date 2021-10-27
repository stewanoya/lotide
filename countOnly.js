const assertEqual = function(actual, expected) {
  const pass = "✅✅✅ Assertation Passed: "
  const fail =  "🛑🛑🛑 Assertation Failed: "
  if (actual !== expected) {
    console.log(`${fail} ${actual} !== ${expected}.`);
  } else {
    console.log(`${pass} ${actual} === ${expected}.`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  let finalCount = {};
  for (names of allItems) {
    if (itemsToCount[names]) {
      if (finalCount[names]) {
        finalCount[names] += 1
      } else {
        finalCount[names] = 1
      }
    }
  }
return finalCount;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const namesToFind = {
  "Jason": true, 
  "Karima": true, 
  "Fang": true, 
  "Agouhanna": false 
}

console.log(countOnly(firstNames, namesToFind));

const result1 = countOnly(firstNames, namesToFind);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);