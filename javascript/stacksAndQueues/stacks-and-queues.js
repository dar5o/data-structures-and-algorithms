'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let topNode = this.top;
    let nodeToAdd = new Node(value);
    nodeToAdd.next = topNode;
    this.Top = nodeToAdd;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    return temp.value;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    if(this.top === null) {
      return true;
    } else {
      return false;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let nodeToAdd = new Node(value);
    let currentBack = this.back;

    if(currentBack) {
      currentBack.next = nodeToAdd;
    }
    this.back = nodeToAdd;

    if(!this.front) {
      this.front = nodeToAdd;
    }
  }

  dequeue() {
    let nodeToRemove = this.front;
    this.front = nodeToRemove.next;

    if(this.back === nodeToRemove) {
      this.back = nodeToRemove.next;
    }
    return nodeToRemove.value;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    if(this.front === null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {Stack, Queue};