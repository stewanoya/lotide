const tail = (array) => {
  let arrayNew = [];
  for (let i = 1; i < array.length; i++) {
    arrayNew.push(array[i]);
  }
  return arrayNew;
};

module.exports = tail;
