var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //constant time O(1)
  var node = Tree(value);
  node.parent = this;
  this.children.push(node);
};

treeMethods.contains = function(target) {
  //linear time
  if (this.value === target) {
    return true;
  } else {
    if (this.children.length) {
      return _.any(this.children, child => child.contains(target));
    }
  }
};

treeMethods.removeFromParent = function(value) {
  //linear time O(n)
  if (this.value === value) {
    var child = this.parent.children.indexOf(this);
    this.parent.children.splice(child, 1);
    this.parent = null;
    return true;
  } else {
    if (this.children.length) {
      return _.any(this.children, child => {
        return child.removeFromParent(value) === true;
      });
    }
  }
  return false;
};

treeMethods.traverse = function(callback) {
  //linear time O(n)
  callback(this.value);
  if (this.children.length) {
    _.each(this.children, child => {
      child.traverse(callback);      
    });  
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
