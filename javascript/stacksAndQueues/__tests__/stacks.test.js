'use strict';

const { Stack } = require('../stacks-and-queues');

describe('stack test', () => {
  it('can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(3);
    expect(JSON.stringify(stack)).toStrictEqual('{"top":{"value":3,"next":null}}');
  });

  it('can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(4);
    stack.push(5);
    stack.push(6);
    expect(JSON.stringify(stack)).toStrictEqual('{"top":{"value":6,"next":{"value":5,"next":{"value":4,"next":null}}}}');
  });

  it('can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(7);
    stack.push(8);
    stack.push(9);

    stack.pop();
    stack.pop();
    stack.pop();

    expect(JSON.stringify(stack)).toStrictEqual('{"top":null}');
  });

  it('can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(11);
    stack.push(12);

    stack.pop();

    expect(JSON.stringify(stack)).toStrictEqual('{"top":{"value":11,"next":{"value":10,"next":null}}}');
  });

  it('can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(13);
    stack.push(14);
    stack.push(15);

    expect(JSON.stringify(stack)).toStrictEqual(15);
  });

  it('can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toStricteEqual(null);
  });
});