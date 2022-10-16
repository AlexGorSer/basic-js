const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  result: [],

  getLength() {

    let length = this.result.length;
    return length;
    // remove line with error and write your code here
  },
  addLink(value) {

    this.result.push(`( ${value} )`);
    return this;
    // remove line with error and write your code here
  },
  
  removeLink(position) {
    if(this.result[position-1]) {

      this.result.splice(position - 1, 1);
      return this;
      
    } else {

      this.result = [];
      throw new Error('You can\'t remove incorrect link!');

    }
    // remove line with error and write your code here
  },
  reverseChain() {

    this.result.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {

    let chains = this.result.join('~~');
    this.result = [];
    return chains;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
