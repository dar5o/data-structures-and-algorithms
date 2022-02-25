'use strict';

let HashTable = require('../hashtable.js');
let tree1 = require('./tree1.js');
let tree2 = require('./tree2.js');

const treeIntersection = (tree1, tree2) => {

  let table = new HashTable(512);
  let commonValues = [];

  settingTheTable(tree1.root, table);
  
  findCommonValues(tree2.root, table, commonValues);
  
  console.log(commonValues)
  return commonValues;
};

const settingTheTable = (node, table) => {

  if (!node) return;

  table.set(node.value.toString());

  if (node.left) settingTheTable(node.left, table);
  if (node.right) settingTheTable(node.right, table);
}

const findCommonValues = (node, table, arr) => {

  if (!node) return;

  let common = table.contains(node.value.toString());
  if (common) arr.push(node.value.toString());

  if (node.left) findCommonValues(node.left, table, arr);
  if (node.right) findCommonValues(node.right, table, arr);
};

treeIntersection(tree1, tree2);

module.exports = treeIntersection;
