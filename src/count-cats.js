const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrixx) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  let count = 0;
  matrixx.find(function (item) {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === "^^") {
        count = count + 1;
      }
    }
  });
  return count;
}

module.exports = {
  countCats,
};
