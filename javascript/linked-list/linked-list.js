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
  
  kthFromEnd(k) {
    let pointerOne = this.head;
    let pointerTwo = this.head;

    for(let i = 0; i < k - 1; i += 1) {
      if(pointerTwo.next === null) {
        return 'No Data Found';
      }
      pointerTwo = pointerTwo.next;
    }
    while(pointerTwo.next !== null) {
      pointerOne = pointerOne.next;
      pointerTwo = pointerTwo.next;
    }
    return pointerOne.data;
  }
}
function zipLists(list1, list2) {
  const newList = new LinkedList;

  list1 = list1.head;
  list2 = list2.head;
  newList.head = new Node(list1.data);
  list1 = list1.next;

  while(list1 || list2) {
    if(list1 && list2) {
      newList.append(list2.data);
      newList.append(list1.data);
      list1 = list1.next;
      list2 = list2.next;
    } else if( list1 === null && list2) {
      newList.append(list2.data);
      list2 = list2.next;
    } else if( list1 && list2 === null) {
      newList.append(list1.data);
      list1 = list1.next;
    } else {
      return;
    }
    return newList.toString();
  }
}

module.exports = LinkedList;
