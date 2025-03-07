const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

  
  // remove line with error and write your code here

  function sortArr(members) {
  for (let i = 0; i < members.length; i++){
      if (typeof members[i] === "string"){
          members[i] = members[i].replace(/\s+/g,'');
      }   
  }
};

function createDreamTeam(members) {
if (Array.isArray(members)){
sortArr(members);
let teamName = '';
for (let i = 0; i < members.length; i++) {
    if(typeof members[i] === "string") {
        let first = members[i].charAt(0);
        teamName = teamName + first;
    }
    teamName = teamName.toUpperCase();
    teamName = teamName.split('').sort().join('');
} return teamName;
}return false;
}

module.exports = {
  createDreamTeam
};
