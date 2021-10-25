const assertEqual = function(actual, expected) {
  const pass = "✅✅✅ Assertation Passed: "
  const fail =  "🛑🛑🛑 Assertation Failed: "
  if (actual !== expected) {
    console.log(`${fail} ${actual} !== ${expected}.`);
  } else {
    console.log(`${pass} ${actual} === ${expected}.`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("stew", "stew");
assertEqual(19345193, 139513951);
