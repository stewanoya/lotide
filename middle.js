const middle = (array) => {
  let midIndex = array.length / 2;
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (midIndex % 1 === 0) {
    middleArray.push(array[midIndex - 1]);
    middleArray.push(array[midIndex]);
  } else {
    middleArray.push(array[Math.floor(midIndex)]);
  }
  return middleArray;
};

module.exports = middle;
