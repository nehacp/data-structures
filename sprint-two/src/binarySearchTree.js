var BinarySearchTree = function(value) {
  this.value = value;
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
  
  //var tree = new BinarySearchTree(value);
 // this.traverse.call(this, tree);
  //if less, check left property for null

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
	if (this.left){
		this.left.depthFirstLog(callback);
	}
	if (this.right){
		this.right.depthFirstLog(callback)
	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
