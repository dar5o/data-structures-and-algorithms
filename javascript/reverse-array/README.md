# Reverse Array
- Write a function called reverseArray which takes an array as an argument and returns an array with elements in reversed order

## Alogrithm

Use a for loop to look at all the elements in the array. (Iterate through the array).
For each item, swap with the inverse array index.

## Pseudocode

```plaintext

function ReverseArray takes in 'arr':

  declare start <- 0;
  declare end <- length of array minus 1;
  while start <= end:
    declare temp <- arr[start]
    arr[start] <- arr[end]
    arr[end] <- temp
    start = start +1
    end = end -1

```
## Whiteboard img

![Whiteboard](./img.png)