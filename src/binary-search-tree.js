const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

 constructor() {
    this.root1 = null;
  }

  root() {
    return this.root1;
  }

  add(data) {
    this.root1 = addValue(this.root1, data);

    function addValue(node, data) {
      if (!node) {
        //если нет корня
        return new Node(data);
      }

      if (node.data == data) return node; //если корень равен добовл эл-ту

      if (data < node.data) {
        node.left = addValue(node.left, data);
      } else {
        node.right = addValue(node.right, data);
      }
      return node;
    }

    return this.root1;
  }

  has(data) {
    return hasNode(this.root1, data);

    function hasNode(node, data) {
      if (!node) return false;

      if (node.data == data) return true;

      if (data < node.data) {
        return hasNode(node.left, data);
      } else {
        return hasNode(node.right, data);
      }
    }
  }

  find(data) {
    let curr = this.root1;

    while (curr) {
      if (data < curr.data) {
        curr = curr.left;
      } else if (data > curr.data) {
        curr = curr.right;
      } else {
        return curr;
      }
    }

    return null;
  }

  remove(data) {
    this.root1 = removeNode(this.root1, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
    return this.root1;
  }

  min() {
    if (!this.root1) return null;

    let node = this.root1;

    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root1) return null;

    let node = this.root1;

    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
