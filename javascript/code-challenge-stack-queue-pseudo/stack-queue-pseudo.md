# Challenge Summary

<!-- Description of the challenge -->

Challenge Type: Code Challenge / Algorithm

1. Create a new class called pseudo queue.

   - this PseudoQueue class will implement our standard queue interface.
     1. enqueue
     2. dequeue
   - utilize 2 `Stack` instances to create and manage the queue.

## Methods:

- enqueue

  - Arguments: value

  - Inserts `value` into the PseudoQueue, using a first-in, first-out approach.

- dequeue

  - Arguments: none

  - Extracts a value from the PseudoQueue, using a first-in, first-out approach.

> NOTE: The `Stack` instances have only `push`, `pop`, and `peek` methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Write tests to prove the following functionality:

- [x] Can successfully enqueue into a queue.
- [x] Can successfully enqueue multiple values into a queue.
- [x] Can successfully empty a queue after multiple dequeues.
- [x] Can successfully instantiate an empty queue.
- [x] Calling dequeue or peek on empty queue raises exception.

## Whiteboard Process

<!-- Embedded whiteboard image -->

![queue](./asset/whiteboard%20for%20pseudo%20queue.jpg)

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I used the `Node` approach but we can use `Array`

The big O => `O(1)` time

The big O => `O(n)` space

## Solution

<!-- Show how to run your code, and examples of it in action -->

We used `Stack` methods to do the `queue` so we needed 2 `Stacks` one for the `inStack` and the other one for `outStack` so we can use the `push`, `pop` and `peek` in `queue` to do `enqueue` and `dequeue`.
