const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  if(rootNode.left === null){
    return rootNode.val
  }
  return findMinBST(rootNode.left)
}

function findMaxBST (rootNode) {
  if(rootNode.right === null){
    return rootNode.val
  }
  return findMaxBST(rootNode.right)
}

function findMinBT (rootNode) {
  if(!rootNode){
    return rootNode
  }
  let min = rootNode.val
  let stack = [rootNode]

  while(stack.length){

    let node = stack.pop()
    // console.log(node.val)
    if(node.val < min){
      min = node.val
    }
    if(node.left){
      stack.push(node.left)
    }
    if(node.right){
      stack.push(node.right)
    }
  }
  // console.log(min, 'min number')
  return min
}

function findMaxBT (rootNode) {
  if(!rootNode){
    return rootNode
  }
  let max = rootNode.val
  let stack = [rootNode]

  while(stack.length){

    let node = stack.pop()
    // console.log(node.val)
    if(node.val > max){
      max = node.val
    }
    if(node.left){
      stack.push(node.left)
    }
    if(node.right){
      stack.push(node.right)
    }
  }
  // console.log(max, 'max number')
  return max

}

function getHeight (rootNode) {
  if(!rootNode){
    return -1
  }
  if(rootNode.left === null && rootNode.right === null){
    return 0
  }

  let counter1 = 1 + getHeight(rootNode.left)
  let counter2 = 1 + getHeight(rootNode.right)
  return Math.max(counter1, counter2)
}

function balancedTree (rootNode) {
  if(!rootNode){
    return true
  }
  let stack = [rootNode]
  while(stack.length){
    let currentNode = stack.pop()
    let countL =  getHeight(currentNode.left)
    let countR =  getHeight(currentNode.right)

    if(Math.abs(countL - countR) > 1){
      return false
    }
    if(currentNode?.left){
      stack.push(currentNode.left)
    }
    if(currentNode?.right){
      stack.push(currentNode.right)
    }

  }

return true

}

function countNodes (rootNode) {
    if(!rootNode){
    return rootNode
  }
  let max = 0
  let stack = [rootNode]

  while(stack.length){

    let node = stack.pop()
    max++

    if(node.left){
      stack.push(node.left)
    }
    if(node.right){
      stack.push(node.right)
    }
  }
  // console.log(max, 'max number')
  return max
}

function getParentNode (rootNode, target) {
  if(rootNode.val === target){
    return null
  }

  let stack = [rootNode]
  while(stack.length){
    let node = stack.pop()

    if(node.left !== null){
      stack.push(node.left)
      if(node.left.val === target){
        return node
      }
    }

    if(node.right !== null){
      stack.push(node.right)
      if(node.right.val === target){
        return node
      }
    }
    // if(node.left){
    //   stack.push(node.left)
    // }

    // if(node.right){
    //   stack.push(node.right)
    // }
  }
  return undefined
}

function inOrderPredecessor (rootNode, target) {

let arr = [];

inOrderPredecessor(rootNode.left, target);

arr.push(rootNode.val);

inOrderPredecessor(rootNode.right, target);

if(rootNode.left === null && rootNode.right === null) {

  return arr.length - 2
}
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
