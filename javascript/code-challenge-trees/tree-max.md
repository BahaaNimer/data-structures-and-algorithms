# Challenge Summary

<!-- Description of the challenge -->

Write the following method for the Binary Tree class

find maximum value

- Arguments: none
- Returns: number

> Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Write tests to prove the following functionality:

✓ Can return the max value in a tree.

## Whiteboard Process

<!-- Embedded whiteboard image -->

![tree-max](./asset/whiteboard-binary-max.jpg)

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I take the Node approach

The Big O for the `Time` is `O(1)`
The Big O for the `space` is `O(1)`

## Solution

<!-- Show how to run your code, and examples of it in action -->

To run the code:

```js
node index.js
```

Example:

```js
new Node(1);
new Node(2);
new Node(3);
new Node(4);
new Node(5);
new Node(6);
new Node(7);
new Node(8);
new Node(9);

tree = new BinaryTree(one);
let BTS = new BinaryTreeSearch();

BTS.Add(10);
BTS.Add(11);
BTS.Add(5);
BTS.Add(12);
BTS.Add(13);
BTS.Add(6);
BTS.Add(15);

console.log("====================================");
console.log(tree.Max()); // output: 9
console.log(BTS.Max()); // output: 15
console.log("====================================");
```
