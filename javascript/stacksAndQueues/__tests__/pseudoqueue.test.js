'use strict';

const { PseudoQueue } = require('../stacks-and-queues.js');

describe('testing the pseudoqueue', () => {

  it('can succesfully enqueue the pseudoqueue', () => {
    const pseudoq = new PseudoQueue;

    pseudoq.enqueue(4);

    expect(pseudoq.front.top.value).toStrictEqual(null);
    expect(pseudoq.back.top.value).toStrictEqual(4);
  });

  it('can succesfully dequeue the pseudoqueue', () => {
    const pseudoq = new PseudoQueue;

    pseudoq.enqueue(4);
    pseudoq.dequeue();
    expect(pseudoq.front.top.value).toStrictEqual(null);
    expect(pseudoq.back.top.value).toStrictEqual(null);
  });
});
