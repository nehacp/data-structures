var BinarySearchTree = function(value) {
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) {
  //log(n) time
  if (value < this.value) {
    this.left = (this.left) ? this.left.insert(value) : new BinarySearchTree(value);
  } else if (value > this.value) {
    this.right = (this.right) ? this.right.insert(value) : new BinarySearchTree(value);
  } 
  
  this._leftDepth = this.depth(this.left);
  this._rightDepth = this.depth(this.right);
  if (Math.floor(this._leftDepth / this._rightDepth) >= 2) {
    return this.reBalance('left');
  } else if (Math.floor(this._rightDepth / this._leftDepth) >= 2) {
    return this.reBalance('right');
  } 
  return this;
};

BinarySearchTree.prototype.contains = function(value) { 
  //log(n) time
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

BinarySearchTree.prototype.reBalance = function(side) {
  //linear time
  //get new root value for balanced tree
  var temp = side === 'left' ? this.left.right : this.right.left;
  //if root value is undefined, its not too imbalanced, go back to current tree
  if (!temp) {
    return this;
  }
  //create new tree with new root value
  var tree = new BinarySearchTree(temp.value);
  //iterate over old tree and assign each value to new tree
  this.depthFirstLog(value => tree.insert(value));
  //assign new tree to current tree and return it back to previous call
  return Object.assign(this, tree);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
