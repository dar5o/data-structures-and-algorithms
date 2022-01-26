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

class PseudoQueue {
  constructor(){
    this.front = new Stack;
    this.back = new Stack;
  }

  enqueue(value) {
    this.back.push(value);
  }

  dequeue() {
    if(this.front !== null && this.back !== null) {
      this.front.push(this.back.pop);
    }
    return this.front.pop();
  }
}

class AnimalShelter {
  constructor() {
    this.front = new Stack();
    this.back = new Stack();
  }

  enqueue(animal){
    if (animal !== 'dog' && animal !== 'cat'){
      return null;
    }
    while (this.front.top) {
      let node1 = this.front.pop();
      this.back.push(node1);
    }
    this.front.push(animal);
    while(this.back.top){
      let node2 = this.back.pop();
      this.front.push(node2);
    }
  }

  dequeue(pref){
    if (pref !== 'dog' && pref !== 'cat'){
      return null;
    } else if (pref === 'cat' && this.front.pref === 'cat'){
      this.front.pop();
    } else if (pref === 'dog' && this.front.pref === 'dog'){
      this.front.pop();
    }
  }
}

let brackets = (string) => {
  let stack = [];
  let checkBrackets = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  };
  for(let i = 0; i < string.length; i++) {
    if(string[i] === '(' || string[i] === '[' || string[i] === '{') {
      stack.push(string[i]);
    } else {
      let closingBracket = stack.pop();
      if(string[i] !== checkBrackets[closingBracket]) {
        return false;
      }
    }
  }
  if(stack.length !== 0) {
    return false;
  }
  return true;
};

console.log(brackets('[{()}]'));

module.exports = {Stack, Queue, PseudoQueue, AnimalShelter};
