var BinarySearchTree = function(value) {
  this.value = value;
  this.left = {};
  this.right = {};
};



BinarySearchTree.prototype.insert = function(value) {
  var tree = new BinarySearchTree(value);
  this.traverse.call(this, tree);
  //if less, check left property for null
};

BinarySearchTree.prototype.contains = function(value) {

};

BinarySearchTree.prototype.depthFirstLog = function() {

};

BinarySearchTree.prototype.traverse = function(newTree) {
  if (Object.keys(this).length === 0) {
    return newTree;
  } else {
    if (newTree.value < this.value) {
      this.left = this.traverse.call(this.left, newTree);
    } else {
      this.right = this.traverse.call(this.right, newTree);
    }
  }
  return this;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

