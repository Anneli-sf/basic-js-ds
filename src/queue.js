const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;

      while (curr) {
        if (!curr.next) {
          curr.next = newNode;
          break;
        }
        curr = curr.next;
      }
    }
  }

  dequeue() {
    let curr = this.head.value;
    this.head = this.head.next;
    return curr;
  }
}

module.exports = {
  Queue
};
