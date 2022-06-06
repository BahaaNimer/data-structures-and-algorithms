/* eslint-disable new-cap */
'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  AddHead(value) {
    this.head = new Node(value, this.head);
  }
  Insert(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let tempNode = this.head;
      while (tempNode.next) {
        tempNode = tempNode.next;
      }
      tempNode.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  Includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  ToString() {
    let currentNode = this.head;
    let str = '';
    while (currentNode) {
      str += currentNode.value + ' -> ';
      currentNode = currentNode.next;
    }
    return str;
  }
  Print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

let linkedList = new LinkedList();
linkedList.Print();

module.exports = LinkedList;
