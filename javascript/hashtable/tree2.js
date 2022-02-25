'use strict';

let {BinaryTree, Node} = require('../../trees/trees.js');

let tree2 = new BinaryTree();

let node12 = new Node(42);
let node13 = new Node(100);
let node14 = new Node(600);
let node15 = new Node(15);
let node16 = new Node(160);
let node17 = new Node(200);
let node18 = new Node(350);
let node19 = new Node(125);
let node20 = new Node(175);
let node21 = new Node(4);
let node22 = new Node(500);

tree2.root = node12;
tree2.root.left = node13;
tree2.root.right = node14;
tree2.root.left.left = node15;
tree2.root.left.right = node16;
tree2.root.right.left = node17;
tree2.root.right.right = node18;
tree2.root.left.right.left = node19;
tree2.root.left.right.right = node20;
tree2.root.right.right.left = node21;
tree2.root.right.right.right = node22;

module.exports = tree2;
