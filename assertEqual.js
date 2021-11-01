const assertEqual = function (actual, expected) {
  const pass = "✅✅✅ Assertation Passed: ";
  const fail = "🛑🛑🛑 Assertation Failed: ";
  if (actual !== expected) {
    return `${fail} ${actual} !== ${expected}.`;
  } else {
    return `${pass} ${actual} === ${expected}.`;
  }
};

module.exports = assertEqual;
