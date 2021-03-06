var BinarySearchTree = function(value) {
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) {
  //log(n) time || n*nlog(n)
  if (value < this.value) {
    this.left = (this.left) ? this.left.insert(value) : new BinarySearchTree(value);
  } else if (value > this.value) {
    this.right = (this.right) ? this.right.insert(value) : new BinarySearchTree(value);
  } 
  return this;
  //return this.checkBalance();
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

BinarySearchTree.prototype.breadthFirstLog = function(callback) {
  //linear time
  let queue = [this];
  
  while (queue.length) {
    let node = queue.shift();
    callback(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
};

BinarySearchTree.prototype.depth = function(side) {
  //linear time
  return (side) ? Math.max(this.depth(side.left), this.depth(side.right)) + 1 : 0;
};

BinarySearchTree.prototype.checkBalance = function() {
  this._leftDepth = this.depth(this.left);
  this._rightDepth = this.depth(this.right);
  if (this._leftDepth - this._rightDepth >= 2) {
    return this.reBalance('left');
  } else if (this._rightDepth - this._leftDepth >= 2) {
    return this.reBalance('right');
  } 
  return this;
};

BinarySearchTree.prototype.reBalance = function(side) {
  //n*nlog(n) time
  var temp;

  if (side === 'left') {
    temp = (this.left.right) ? this.left.right : this.left.left;
  } else {
    temp = (this.right.left) ? this.right.left : this.right.right;
  }

  var tree = new BinarySearchTree(temp.value);
  this.depthFirstLog(value => tree.insert(value));
  return Object.assign(this, tree);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
