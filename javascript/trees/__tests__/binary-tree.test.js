'use strict';

const { BinaryTree } = require('../binary-tree.js');

describe('testing the binary tree', () => {
  it('can successfully return a collection from a preorder traversal', () => {

    const tree = new BinaryTree();

    tree.root = new Node('4');
    tree.root.left = new Node('5');
    tree.root.right = new Node('6');

    const preOrder = tree.preOrder();
    preOrder(tree.root);

    expect(preOrder).toEqual('4', '5,', '6');
  });

  it('can successfully return a collection from an inorder traversal', () => {
    const tree = BinaryTree();

    tree.root = new Node('7');
    tree.root.left = new Node('8');
    tree.root.right = new Node('9');

    const inOrder = tree.inOrder();
    inOrder(tree.root);

    expect(inOrder).toEqual('8', '7', '9');
  });

  it('can successfully return a collection from a postorder traversal', () => {
    const tree = BinaryTree();

    tree.root = new Node('10');
    tree.root.left = new Node('11');
    tree.root.right = new Node('12');

    const postOrder = tree.postOrder();
    postOrder(tree.root);

    expect(postOrder).toEqual('11', '12', '10');
  });
});