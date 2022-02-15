'use strict';
const insertionSort = require('../insertionSort.js');

describe('testing insertionSort', () => {

  it('should succesfully sort an array lowest to greatest', () => {
    let testArray = [5, 15, 40, 10, 20, 1];
    let insertionSortTest = insertionSort(testArray);

    expect(insertionSortTest).toEqual([1, 5, 10, 15, 20, 40]);
  });
});