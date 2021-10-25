const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🛑🛑🛑 Assertation Failed: " + actual + " !== " + expected + ".");
  } else {
    console.log("✅✅✅ Assertation Passed: " + actual + " === " + expected + ".");
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("stew", "stew");
assertEqual(19345193, 139513951);