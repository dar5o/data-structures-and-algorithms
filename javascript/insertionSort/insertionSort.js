'use strict';

const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let index = array[i];
    let j = i - 1;
    
    while ((j > -1) && (index < array[j])) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = index;
  }
  return array;
}

console.log(insertionSort([5, 15, 40, 10, 20, 1]));

module.exports = insertionSort;