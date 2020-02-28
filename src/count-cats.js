module.exports = function countCats(matrix) {
  let count = 0;
  let findElem = '^^';
  if (!matrix || !matrix.length || matrix !== undefined) {
    matrix.forEach(array => {
      array.forEach(el => {
        (el === findElem) ? count++ : 0;
      })
    }); //47ms
    return count;
  } else {
    return 0;
  }

  /*
  if (!matrix || !matrix.length || matrix !== undefined) {
    // const flatSingle = arr => [].concat(...arr);
    // matrix = flatSingle(matrix); //47ms
    // matrix = matrix.reduce((acc, val) => acc.concat(val), []); //62ms
    return matrix.filter(el => el === '^^').length;
  } else {
    return 0;
  }
  */
};
