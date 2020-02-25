module.exports = function countCats(matrix) {
  let count = 0;
  let findElem = '^^';
  if (!matrix || !matrix.length || matrix !== undefined) {
    matrix.forEach(array => {
      array.forEach(el => {
        (el === findElem) ? count++ : 0;
      })
    });
    return count;
  } else {
    return 0;
  }
};
