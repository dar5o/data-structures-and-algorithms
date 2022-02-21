'use strict';

const hashIt = require('hash-it');

// creates the HashTable class and constructs a new table with a size of 30
class HashTable {
  constructor(size = 30) {
    this.keyMap = new Array(size);
  }

  //this method should hash the key, and set the key and value pair in the table
  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index] = [...this.keyMap[index], `${key}:${value}`];
  }

  //this method should return a value associated with that key in the table
  get(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let input of this.keyMap[index]) {
        let [singleKey, value] = input.split(':');
        if (singleKey === key) {
          return value;
        }
      }
    }
    return undefined;
  }

  //this method should return a boolean, indicating if the key exists in the table already
  contains(key) {
    let index = hash(key);
    if (this.keyMap[index]) {
      return true;
    }
    return false;
  }

  //this method should return a collection of keys
  keys() {
    let arr = [];
    for (let input of this.keyMap) {
      if (input) {
        for (let singleInput of input) {
          let key = singleInput.split(':')[0];
          arr.push(key);
        }
      }
    }
    return arr;
  }

  //this method should return an index in the collection for that key
  hash(key) {
    return hashIt(key) % this.keyMap.length;
  }
}

let hashT = new HashTable();
hashT.set('duelist', 'jett');
hashT.set('initiator', 'sova');
hashT.set('controller', 'astra');
hashT.set('sentinel', 'chamber');

module.exports = HashTable;