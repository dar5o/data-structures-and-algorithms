'use strict';

let {BinaryTree, Node} = require('../../trees/trees.js');

let tree1 = new BinaryTree();

let node1 = new Node(150);
let node2 = new Node(100);
let node3 = new Node(250);
let node4 = new Node(75);
let node5 = new Node(160);
let node6 = new Node(200);
let node7 = new Node(350);
let node8 = new Node(125);
let node9 = new Node(175);
let node10 = new Node(300);
let node11 = new Node(500);

tree1.root = node1;
tree1.root.left = node2;
tree1.root.right = node3;
tree1.root.left.left = node4;
tree1.root.left.right = node5;
tree1.root.right.left = node6;
tree1.root.right.right = node7;
tree1.root.left.right.left = node8;
tree1.root.left.right.right = node9;
tree1.root.right.right.left = node10;
tree1.root.right.right.right = node11;

module.exports = tree1;
