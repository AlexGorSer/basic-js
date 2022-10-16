const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

// let array =  [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5];
// transform(array);
function transform(arr) {
  let newArr =[];
  if(!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if(arr.length === 0) {
    return newArr;
  }

  for(let i = 0; i < arr.length; i++) {

    if(arr[i] === '--discard-next') {
      newArr.push(arr[i + 1]);
      // i++
    } else if(arr[i] === '--discard-prev') {
      newArr.pop();
    } else if (arr[i] === '--double-next') {
      newArr.push(arr[i + 1]);
    }else if (arr[i] === '--double-prev') {
      newArr.push(arr[i - 1]);

    }
    else newArr.push(arr[i])

  }
  return newArr.filter(e => typeof e !== 'undefined');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
