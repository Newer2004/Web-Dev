// Define Node class
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  // Define BinarySearchTree class
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Function to insert a new node into the tree
    insert(data) {
      const newNode = new Node(data);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Helper function to recursively insert a node
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  }
  
  // Define global BST variable
  let bst = new BinarySearchTree();
  
  // Function to display the binary search tree
  // script.js

// Function to display the binary search tree
function showBST() {
    const inputArray = document.getElementById('inputArray').value;
    const numbers = inputArray.split(',').map(Number);
  
    // Clear previous tree
    const treeContainer = document.getElementById('treeContainer');
    treeContainer.innerHTML = '';
  
    // Create new Binary Search Tree
    bst = new BinarySearchTree();
    numbers.forEach(number => bst.insert(number));
  
    // Helper function to recursively create tree nodes
    // Helper function to recursively create tree nodes
function createTreeNode(node, x, y) {
    const div = document.createElement('div');
    div.className = 'node';
    div.textContent = node.data;
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    
    if (node.left !== null) {
      const leftX = x - 50; // Adjust horizontal position for left child
      const leftY = y + 80; // Adjust vertical position for left child
      const connectionLeft = document.createElement('div');
      connectionLeft.className = 'connection';
      connectionLeft.style.left = (x + 20) + 'px'; // Adjust left connection position
      connectionLeft.style.top = (y + 20) + 'px'; // Adjust left connection position
      connectionLeft.style.width = '1px'; // Set width of left connection
      connectionLeft.style.height = (leftY - y - 20) + 'px'; // Set height of left connection
      treeContainer.appendChild(connectionLeft);
      treeContainer.appendChild(createTreeNode(node.left, leftX, leftY));
    }
    if (node.right !== null) {
      const rightX = x + 50; // Adjust horizontal position for right child
      const rightY = y + 80; // Adjust vertical position for right child
      const connectionRight = document.createElement('div');
      connectionRight.className = 'connection';
      connectionRight.style.left = (x + 20) + 'px'; // Adjust right connection position
      connectionRight.style.top = (y + 20) + 'px'; // Adjust right connection position
      connectionRight.style.width = '1px'; // Set width of right connection
      connectionRight.style.height = (rightY - y - 20) + 'px'; // Set height of right connection
      treeContainer.appendChild(connectionRight);
      treeContainer.appendChild(createTreeNode(node.right, rightX, rightY));
    }
  
    return div;
  }
  
  
    // Create tree starting from root node
    const root = bst.root;
    treeContainer.appendChild(createTreeNode(root, treeContainer.clientWidth / 2, 40));
  }
  
