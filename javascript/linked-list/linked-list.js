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
  
  append(data) {
    let currentNode = this.head;

    while(currentNode) {
      if(currentNode.next === null) {
        currentNode.next = new Node(data);
        return;
      }
      currentNode = currentNode.next;
    }
  }

  insertBefore(data, newData) {
    let currentNode = this.head;
    let newNode = new Node(newData);

    while(currentNode.data !== null) {
      if(currentNode.data === data) {
        newNode.next = currentNode;
        this.head = newNode;
      } else if(currentNode.next.data === data) {
        let insertNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = insertNode;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  insertAfter(data, newData) {
    let currentNode = this.head;

    while(currentNode) {
      if(currentNode.data === data) {
        let newNode = new Node(newData);
        let insertNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = insertNode;
      }
      currentNode = currentNode.next;
    }
  }
  
}

module.exports = LinkedList;
