'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }


  insert(value) {
 
    this.head === null
      ? this.head = new Node(value) 
      : this.head = new Node(value, this.head);
    return;
  }


  includes(value) {
    let current = this.head;
    while (current) {
      if(current.value === value) {

        return true;
      }
      current = current.next;
    }

    return false;
  }

  toString() {
    let returnString = "";
    let current = this.head;
    while (current) {
      returnString += `{ ${current.value} } -> `;
      current = current.next;
    }
    returnString += 'NULL';
    return returnString;
  }
}

module.exports = LinkedList;
