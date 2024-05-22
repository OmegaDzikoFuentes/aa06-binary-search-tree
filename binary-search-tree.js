// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {

      this.root = null;

    }

    insert(val, currentNode=this.root) {

      //if there is no root, create root node and insert
      if(!this.root) {

        this.root = new TreeNode(val);

        return;

      }

      //if value is less than curr value
      if(val < currentNode.val) {

        //check if current node has left pointer
        if(!currentNode.left) {

          //place node at current node's left
          currentNode.left = new TreeNode(val);

        } else { //if it does have a left pointer, recursively call insert passing in the lfeft pointer

          this.insert(val, currentNode.left);

        }

      } else { //if value is higher than current node value

        if(!currentNode.right) {

          //insert the node at current node
          currentNode.right = new TreeNode(val);

        } else { //recursively call insert for the current node

          this.insert(val, currentNode.right);

        }

      }

    }

    search(val) {

      //if root is null, return false because tree is empty
      if(!this.root) {

        return false;

      }

      //set root node to current variable
      let current = this.root;

      //loop and seach through nodes
      while(current) {

        //if the value is lower go left by reassgining current to the left
        if(val < current.val) {

          current = current.left;

        } else if(val > current.val) {

            current = current.right;

          } else {

            return true;

          }

        }

        return false;

    }


    preOrderTraversal(currentNode = this.root) {

      //base case: check if current node has children
      if(!currentNode) return;

      //perform operation
      console.log(currentNode.val);

      //traverse left
      this.preOrderTraversal(currentNode.left);

      //traverse right
      this.preOrderTraversal(currentNode.right);

    }


    inOrderTraversal(currentNode = this.root) {

          //base case: check if current node has children
          if(!currentNode) return;

          //traverse left
          this.inOrderTraversal(currentNode.left);

           //perform operation
           console.log(currentNode.val);

          //traverse right
          this.inOrderTraversal(currentNode.right);
    }


    postOrderTraversal(currentNode = this.root) {

            //base case: check if current node has children
            if(!currentNode) return;

            //traverse left
            this.postOrderTraversal(currentNode.left);

            //traverse right
            this.postOrderTraversal(currentNode.right);

             //perform operation
             console.log(currentNode.val);
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      if (this.root === null) return;

      const queue = [this.root];

      while (queue.length > 0) {
        const node = queue.shift();
        console.log(node.value);

        if (node.left !== null) {
          queue.push(node.left);
        }

        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }


    // Depth First Traversal - Iterative
    depthFirstTraversal() {

      const stack = [this.root];

      while(stack.length) {

      let currNode = stack.pop();

      console.log(currNode.val);

      if(currNode.left) {

        stack.push(currNode.left)

      }
      if (currNode.right) {

        stack.push(currNode.right)
      }
    }

    }
  }


  module.exports = { BinarySearchTree, TreeNode };
