# Trees

<!-- Short summary or background information -->

## Common Terminology

- Node - A Tree node is a component which may contain its own values, and references to other nodes
- Root - The root is the node at the beginning of the tree
- K - A number that specifies the maximum number of children any node may have in a k-ary tree. In a binary tree, k = 2.
- Left - A reference to one child node, in a binary tree
- Right - A reference to the other child node, in a binary tree
- Edge - The edge in a tree is the link between a parent and child node
- Leaf - A leaf is a node that does not have any children
- Height - The height of a tree is the number of edges from the root to the furthest leaf

## Challenge

<!-- Description of the challenge -->

## Node

- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

## Binary Tree

- Create a Binary Tree class
- Define a method for each of the depth first traversals:
  - pre order
  - in order
  - post order which returns an array of the values, ordered appropriately.

## Binary Search Tree

- Create a Binary Search Tree class
  > This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
  - Add
    - Arguments: value
    - Return: nothing
    - Adds a new node with that value in the correct location in the binary search tree.
  - Contains
    - Argument: value
    - Returns: boolean indicating whether or not the value is in the tree at least once.

## Write tests to prove the following functionality:

✓ constructor

✓ preOrder

✓ inOrder

✓ postOrder

✓ Binary Search

✓ Can successfully instantiate an empty tree

✓ Can successfully instantiate a tree with a single root node

✓ Can successfully add a left child and right child to a tree

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Depth first call stack via recursion with `Node` approach

The Big O for the `Binary Tree` is `O(n)`

The Big O for the `Binary Tree Search` is `O(h)` or `O(hight)`

## API

<!-- Description of each method publicly available in each of your trees -->

Pre Order: means that the `root` has to be looked at first.

In Order: means that the `root` has to be looked at middle.

Post Order: means that the `root` has to be looked at last.

Add: Adds a new node with that value in the correct location in the binary search tree.

Contains: Returns: boolean indicating whether or not the value is in the tree at least once.
