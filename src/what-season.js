const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function dateCheck(date) {
  if (Object.prototype.toString.call(date) === "[object Date]") {
    // it is a date
    if (isNaN(date)) {
      // d.getTime() or d.valueOf() will also work
      return false;
    } else {
      return true;
    }
  }
  return false;
}

function getSeason(date) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here

  if (!date) {
    return "Unable to determine the time of year!";
  } else if (!dateCheck(date)) {
    return "Invalid date!";
  }

  let month = date.getMonth();
  if (month === 0 || month === 1 || month > 10) {
    return "winter";
  } else if (month === 2 || month === 3 || month === 4) {
    return "spring";
  } else if (month === 5 || month === 6 || month === 7) {
    return "summer";
  } else if (month === 8 || month === 9 || month === 10) {
    return "autumn";
  } else {
    return;
  }
}

module.exports = {
  getSeason,
};
