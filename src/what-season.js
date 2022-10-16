const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason(date) {
  if(arguments.length === 0) {
    return 'Unable to determine the time of year!';
  };
  if(!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  if (Object.getOwnPropertySymbols(date).length > 0) {
    throw new Error("Invalid date!");
  }
  let mount = date.getMonth() + 1;
  if(mount === 1 || mount === 2 || mount === 12){
    return 'winter';
  }
  else if(mount === 3 || mount === 4 || mount === 5){
    return 'spring';
  }
  else if(mount === 6 || mount === 7 || mount === 8){
    return 'summer';
  }
  else if(mount === 9 || mount === 10 || mount === 11){
    return 'autumn';
  }
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
