var BinarySearchTree = function(value) {
  this.value = value;
  this._leftDepth = 0;
  this._rightDepth = 0;
};

BinarySearchTree.prototype.insert = function(value) {
	//log(n) time
  if (value < this.value) {
    (this.left) ? this.left = this.left.insert(value) : this.left = new BinarySearchTree(value);
  } else if (value > this.value) {
    (this.right) ? this.right = this.right.insert(value) : this.right = new BinarySearchTree(value);
  } 
  
  this._leftDepth = this.depth(this.left);
  this._rightDepth = this.depth(this.right);
  if (this._leftDepth / this._rightDepth > 2) {
    this.rebalance('left');
  } else if (this._rightDepth / this._leftDepth > 2) {
    this.rebalance('right');
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

BinarySearchTree.prototype.rebalance = function(side) {
  //
  var temp;
  var x = this.value;
  // if side is left
  if (side === 'left') {
    // one-level down with its right
    temp = this.left.right;
  } else {
    // else side is right
    // one-level down with its left
    temp = this.right.left;
  }
    this.value = temp.value;

    this.insert(x);
  // create temp binary tree with above node value
 // var tree = new BinarySearchTree(temp.value);
  // call cb on every other value in the exisiting tree
  this.depthFirstLog(this.insert);

  //  new theory
  // collect all values by iterating and then populate all of them to new bst
};

// from exisiting head/root check its left and right tree
// check one level deep and operate on its left/right
//on heavier side, check its opposite side


/*
 * Complexity: What is the time complexity of the above functions?
 */
