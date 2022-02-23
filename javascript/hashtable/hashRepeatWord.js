'use strict';

let HashTable = require('./hashtable');

const hashRW = (str) => {
  let currentStr = str.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(' ');
  let hashWords = new HashTable(currentStr.length);

  for (let i = 0; i < currentStr.length; i++) {
    if(hashWords.contains(currentStr[i])) {
      return currentStr[i];
    }
    hashWords.set(currentStr[i]);
  }
}

module.exports = hashRW;