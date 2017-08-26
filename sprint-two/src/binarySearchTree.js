var BinarySearchTree = function(value) {
  this.value = value;
  this._leftDepth = 0;
  this._rightDepth = 0;
};

BinarySearchTree.prototype.insert = function(value) {
	//log(n) time
  if (value < this.value) {
    (this.left) ? this.left = this.left.insert(value) : this.left = new BinarySearchTree(value);
  } else {
    (this.right) ? this.right = this.right.insert(value) : this.right = new BinarySearchTree(value);
  }
  return this;
};

BinarySearchTree.prototype.contains = function(value) {
	//log(n)
  if (this.value === value) {
    return true;
  } else {
    if (value < this.value) {
      return (this.left) ? this.left.contains(value) : false;
    } else {
      return (this.right) ? this.right.contains(value) : false;
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  //linear time
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

BinarySearchTree.prototype.depth = function(side) {
  //log(n) time
  return (side) ? Math.max(this.depth(side.left), this.depth(side.right)) + 1 : 0;
};

// from exisiting head/root check its left and right tree
// check one level deep and operate on its left/right
//on heavier side, check its opposite side


/*
 * Complexity: What is the time complexity of the above functions?
 */
