# Hash Table

## I implemented a HashTable class with the following methods:
  - set
  - get
  - contains
  - keys
  - hash

## Challange

Create methods that are found in Hash Tables

## Approach and Efficiency

I planned on figuring out how each part of the Hash Table was connected and to continue puzzling the pieces to create a functioning Hash Table class

## Features

### Methods:
  - set
    + Arguments: key, value
    + Returns: nothing
    + This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
    + Should a given key already exist, replace its value from the value argument given to this method.
  - get
    + Arguments: key
    + Returns: Value associated with that key in the table
  - contains
    + Arguments: key
    + Returns: Boolean, indicating if the key exists in the table already.
  - keys
    + Returns: Collection of keys
  - hash
    + Arguments: key
    + Returns: Index in the collection for that key

### Properties:
  - this.keyMap
    + an array of values