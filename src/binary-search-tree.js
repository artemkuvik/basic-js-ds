const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
constructor() {
  this.head = null;
}
  root() {
   return this.head;
  }
  
  add(data) {
    let node = new Node(data);
    if(!this.head) {
      this.head = node;
    }
    else {
      let trueNode = this.head;
      while(true)
      if(node.data < trueNode.data) {
        if(!trueNode.left){ 
          trueNode.left = node;
          break;
        } else {
          trueNode = trueNode.left;
        }
      }
      else if(node.data > trueNode.data) {
        if(!trueNode.right){ 
          trueNode.right = node;
          break;
        } else {
          trueNode = trueNode.right;
        }
      }
      else if(node.data === trueNode.data) break;
    }
  }

  has(data) {
    let result = false;
    let trueNode = this.head;
    let i = 0;
    while(i < 100000) {
      if (data === trueNode.value) {
        result = true;
        break;
      }
      else if (data < trueNode.value) {
        if(!trueNode.left) break;
        else trueNode = trueNode.left;
      }
      if (data > trueNode.value) {
        if(!trueNode.right) break;
        else trueNode = trueNode.right;
      }
      i++
    }
    return result
  }

  find(data) {
    let result = null;
    let trueNode = this.head;
    let i = 0;
    while(i < 100000) {
      if (data === trueNode.value) {
        result = trueNode;
        break;
      }
      else if (data < trueNode.value) {
        if(!trueNode.left) break;
        else trueNode = trueNode.left;
      }
      if (data > trueNode.value) {
        if(!trueNode.right) break;
        else trueNode = trueNode.right;
      }
      i++
    }
    return result
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};