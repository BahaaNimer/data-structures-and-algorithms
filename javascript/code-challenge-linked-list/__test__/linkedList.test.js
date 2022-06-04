/* eslint-disable new-cap */
'use strict';
const LinkedList = require('../lib/linkedList');

describe('Linked List Test', () => {
  test('Can successfully instantiate an empty linked list', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  });
  test('Can properly insert into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('bahaa');
    expect(linkedList.head.value).toBe('bahaa');
  });
  test('The head property will properly point to the first node in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    linkedList.Insert('a');
    linkedList.Insert('h');
    linkedList.Insert('a');
    linkedList.Insert('a');
    expect(linkedList.head.value).toBe('b');
  });
  test('Can properly insert multiple nodes into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('bahaa');
    linkedList.Insert('malek');
    linkedList.Insert('mohammad');
    linkedList.Insert('eamd');
    linkedList.Insert('ahmad');
    linkedList.Insert('heboo');
    expect(linkedList.length > 0).toBe(true);
  });
  test('Will return true when finding a value within the linked list that exists', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('bahaa');
    expect(linkedList.Includes('bahaa')).toBe(true);
  });
  test('Will return fale when searching for a value in the linked list that does not exists', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('bahaa');
    expect(linkedList.Includes('malek')).toBe(false);
  });
  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('B');
    linkedList.Insert('a');
    linkedList.Insert('h');
    linkedList.Insert('a');
    linkedList.Insert('a');
    expect(linkedList.ToString()).toBe('B -> a -> h -> a -> a -> ');
  });
});
