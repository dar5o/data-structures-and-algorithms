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



module.exports = { Node, BinarySearchTree, BinaryTree, KAryTree }
