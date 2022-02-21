'use strict';

const HashTable = require('./hashtable.js');

describe('queue tests: ', () => {

  let hashT = new HashTable(7);
  it('can successfully instantiate a HashTable', () => {
    expect(hashT instanceof HashTable).toBe(true);
  });

  it('can find values within the HashTable', () => {
    hashT.set('!GN5baB', 'password');

    expect(hashT.get('!GN5baB')).toBe('value');
  });

  it('retrieving based on a key returns the value stored', () => {
    hashT.set('uxB?6GJ', 'value1');

    expect(hashT.get('uxB?6GJ')).toBe('value1');
  });

  it('successfully returns undefined for a key that is not in the hashtable', () => {
    expect(hashT.get('doesNotExist')).toBe(undefined);
  });

  it('successfully returns a list of keys that exist in the hashtable', () => {
    expect(JSON.stringify(hashT.keys())).toBe('["uxB?6GJ","!GN5baB"]');
  });

  it('successfully handle a collision within the hashtable', () => {
    hashT.set('qga#G8s', 'value2');
    hashT.set('6Zrc=CN', 'value3');
    hashT.set('5b4P$Rv', 'value4');
    hashT.set('NWKu*7U', 'value5');
    hashT.set('UT8mJ#2', 'value6');

    expect(hashT.keyMap[3].length).toBe(2);
  });

  it('successfully retrieve a value from a bucket within the hashtable', () => {
    expect(hashT.get('uxB?6GJ')).toBe('value1');
  });

  it('successfully hash a key to an in-range value', () => {
    expect(hashT.hash('thingToHash')).toBeGreaterThan(0);
    expect(hashT.hash('thingToHash')).toBeLessThan(7);
  });

});
