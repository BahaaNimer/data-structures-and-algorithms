# Stacks and Queues

<!-- Short summary or background information -->

`Stack` : A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

Stacks follow these concepts:

`FILO`

First In Last Out

> This means that the first item added in the stack will be the last item popped out of the stack.

`LIFO`

Last In First Out

> This means that the last item added to the stack will be the first item popped out of the stack.

## Queue

Common terminology for a queue is:

1. Enqueue - Nodes or items that are added to the queue.

2. Dequeue - Nodes or items that are removed from the queue.

   > If called when the queue is empty an exception will be raised.

3. Front - This is the front/first Node of the queue.

4. Rear - This is the rear/last Node of the queue.

5. Peek - When you peek you will view the value of the front Node in the queue.

   > If called when the queue is empty an exception will be raised.

6. IsEmpty - returns true when queue is empty otherwise returns false.

Queues follow these concepts:

`FIFO`

First In First Out

> This means that the first item in the queue will be the first item out of the queue.

`LILO`

Last In Last Out

> This means that the last item in the queue will be the last item out of the queue.

## Challenge

<!-- Description of the challenge -->

Implement both a Stack and a Queue

Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

Create a Stack class that has a top property. It creates an empty Stack when instantiated.

And have the 4 methods:

1. push
2. pop
3. peek
4. isEmpty

Create a Queue class that has a front property. It creates an empty Queue when instantiated.

And have the 4 methods:

1. enqueue
2. dequeue
3. peek
4. isEmpty

## Write tests to prove the following functionality:

- [x] Can successfully push onto a stack
- [x] Can successfully push multiple values onto a stack
- [x] Can successfully pop off the stack
- [x] Can successfully empty a stack after multiple pops
- [x] Can successfully peek the next item on the stack
- [x] Can successfully instantiate an empty stack
      Calling pop or peek on empty stack raises exception
- [x] Can successfully enqueue into a queue
- [x] Can successfully enqueue multiple values into a queue
- [x] Can successfully dequeue out of a queue the expected value
- [x] Can successfully peek into a queue, seeing the expected value
- [x] Can successfully empty a queue after multiple dequeues
- [x] Can successfully instantiate an empty queue
      Calling dequeue or peek on empty queue raises exception

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I used the `Node` approach but we can use `Array`

The big O => `O(1)`

## API

<!-- Description of each method publicly available to your Stack and Queue-->

For both Stack and Queue you can add data and remove it according to there terminology also you can check if it's empty or not befor peek or remove also you can check if it's empty or not before adding a data.
