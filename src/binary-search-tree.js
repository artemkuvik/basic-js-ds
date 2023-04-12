const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    let node = head => {
      if (head === null) {
          this.head = new Node(data);
      } 
      else if (data < head.data) {
        if (head.left === null)
        head.left = new Node(data);
        else node(head.left);
      } 
      else if (data > head.data) {
        if (head.right === null)
        head.right = new Node(data);
        else node(head.right);
      }  
  }
  node(this.head);
  }


  has(data ) {
    return this.find(data) !== null;  
  }

  find(data) {
    if (this.head === null) return null;
    let node = this.head;
    if (node.data === data) return node;
    else {
        while (node)
          if (node.data === data) return node;
          else {
            if (data < node.data)
              node = node.left;
            else node = node.right;
          }
    }
    return null;
  }

  remove(data ) {
    this.head = removeElems(this.head, data);
    function removeElems(node, data) {
      if (!node) return null;
      else if (data < node.data) {
        node.left = removeElems(node.left, data);
        return node;
      } 
      else if (data > node.data) {
        node.right = removeElems(node.right, data);
        return node;
      } 
      else {
        if ((!node.left) && (!node.right)) {
          return null;
        } 
        else if (!node.left) {
          node = node.right;
          return node;
        } 
        else if (!node.right) {
          node = node.left;
          return node;
        }
        let min = node.right;
        
        while (min.left) {
          min = min.left;
        }
        node.data = min.data;
        node.right = removeElems(node.right, min.data);
        return node;
      }
    }  
  }

  min() {
    let node = this.head;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data; 
  }

  max() {
    let node = this.head;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data; 
  }
}

module.exports = {
  BinarySearchTree
};