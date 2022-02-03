'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;

    this.parent = null;
    this.children = null;
  }
}

class KAryTree {
  constructor(index) {
    this.root = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return undefined;
      }
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return 'No Root on this Tree';
    }
    let currentNode = this.root;
    let containsValue = false;
    while (currentNode && !containsValue) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        containsValue = currentNode;
      }
    }
    if (!containsValue) {
      return false;
    }
    return containsValue;
  }

}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const array = [];
    const preOrder = (node) => {
      array.push(node.value);
      if (node.left) {
        preOrder(node.left);
      }
      if (node.right) {
        preOrder(node.right);
      }
    };
    let currentNode = this.root;
    preOrder(currentNode);

    return array;
  }

  inOrder() {
    const array = [];
    const inOrder = (node) => {
      if (node.left) {
        inOrder(node.left);
      }
      array.push(node.value);
      if (node.right) {
        inOrder(node.right);
      }
    };
    let currentNode = this.root;
    inOrder(currentNode);

    return array;
  }

  postOrder() {
    const array = [];
    const postOrder = (node) => {
      if (node.left) {
        postOrder(node.left);
      }
      if (node.right) {
        postOrder(node.right);
      }
      array.push(node.value);
    };
    let currentNode = this.root;
    postOrder(currentNode);

    return array;
  }

findMax() {
    let currentNode = this.root;

    let findMaxValue = (currentNode) => {
      if (currentNode === null) {
        return;
      }
      let max = currentNode.value;
      let maxLeft = findMaxValue(currentNode.left);
      let maxRight = findMaxValue(currentNode.right);

      if (maxLeft > max) {
        max = maxLeft;
      }
      if (maxRight > max) {
        max = maxRight;
      }
      return max;
    };
    return findMaxValue(currentNode);
  }

}

let breadthFirst = (tree) => {
  let queue = [];
  let arr = [];
  if (!tree.root) {
    return 'Something went wrong!';
  } else {
    queue.unshift(tree.root);
    arr.push(tree.root);
  }
  let currentNode = queue.pop();
  while(currentNode) {
    if (currentNode.left) {
      queue.unshift(currentNode.left);
    }
    if (currentNode.right) {
      queue.unshift(currentNode.right);
    }
    currentNode = queue.pop();
    // console.log(currentNode, 'THIS IS CURRENT NODE');
    arr.push(currentNode);
  }
  return arr;
}

let fizzBuzzTree = (kArytree) => {

  let currentNode = kArytree.root;
  let array = [];

  while(currentNode && currentNode.children){
    for(let i = 0; i < currentNode.children.length; i++){

  // replace the value with “Fizz” if the value is divisible by 3
  if(currentNode.value % 3 === 0){
    currentNode.value = 'Fizz';
    // replace the value with “Buzz” if the value is divisible by 5
  } else if( currentNode.value % 5 === 0){
    currentNode.value = 'Buzz';
    // replace the value with “FizzBuzz” if the value is divisible by 3 and 5
  } else if (currentNode.value % 15 === 0){
    currentNode.value = 'FizzBuzz';
  // simply turn the number into a String f the value is not divisible by 3 or 5
  } else {
    return currentNode.value.toString();
  }
};

let tree = new BinaryTree();
let kt = new KAryTree();

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.left.left = new Node(3);
tree.root.left.left.left = new Node(4);
tree.root.left.left.right = new Node(18);
tree.root.right = new Node(10);
tree.root.right.right = new Node(32);
tree.root.right.right.left = new Node(40);

module.exports = { Node, BinarySearchTree, BinaryTree, KAryTree }
