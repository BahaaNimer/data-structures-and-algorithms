# Singly Linked List

Build a `linked list` that can detecte if there is a `head node` or not if not it will create one if there is a `head node` it will create a new node next to the head it called `tail node` and I can test if there is a `specific` value in the nodes or not.

## Test for Challenge 1

- [x] Can successfully instantiate an empty linked list.

- [x] Can properly insert into the linked list.

- [x] The head property will properly point to the first node in the linked list.

- [x] Can properly insert multiple nodes into the linked list.

- [x] Will return true when finding a value within the linked list that exists.

- [x] Will return false when searching for a value in the linked list that does not exist.

- [x] Can properly return a collection of all the values that exist in the linked list.

### append

> arguments: new value

adds a new node with the given value to the end of the list

### insert before

> arguments: value, new value

adds a new node with the given new value immediately before the first node that has the value specified

### insert after

> arguments: value, new value

adds a new node with the given new value immediately after the first node that has the value specified

## Test for Challenge 2

- [x] Can successfully add a node to the end of the linked list.

- [x] Can successfully add multiple nodes to the end of a linked list.

- [x] Can successfully insert a node before a node located i the middle of a linked list.

- [x] Can successfully insert a node before the first node of a linked list.

- [x] Can successfully insert after a node in the middle of the linked list.

- [x] Can successfully insert a node after the last node of the linked list.

### Kth From End

Find the kth node from the end of the list

## Test for challenge 3

- [x] Where k is greater than the length of the linked list.

- [x] Where k and the length of the list are the same.

- [x] Where k is not a positive integer.

- [x] Where the linked list is of a size 1.

- [x] “Happy Path” where k is not at the end, but somewhere in the middle of the linked list.

## Whiteboards

Append

![Append](./append%20LL.jpg)

Insert After

![Insert After](./insert%20after%20LL.jpg)

Kth From End

![Kth From End](./kth%20from%20end%20LL.jpg)

## Approach & Efficiency

`big O(n)` Time & `big O(1)` Space for append

`big O(n)` Time & `big O(1)` Space for insert after

`big O(n^2)` Time & `big O(1)` Space for kth from end
