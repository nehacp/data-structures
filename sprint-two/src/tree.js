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
  var node = Tree(value);
  node.parent = this;
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var bool = false;
  function search(node) {
  //check if self has value
      bool = node.value === target;
      //if yes, return true;
    if (!bool) {
        //if not, check children length
      if (node.children.length){
        // if length, loop over children
        //check if each child has value
        bool = _.any(node.children, search);
        //if child has value, return true
        if (bool) {
          return true;
        }
      }
    }
    return bool;
  };

  search(this);
  
  return bool;
  /*
  if (this.value === target){
      return true;
  }
  if (this.children.length){
    let result = _.any(this.children, child => {
      
      child.contains(target));
    if (result){
      return true;
    }*/ 
};

treeMethods.removeFromParent = function(value) {
  //check if tree has value
  if (this.value === value) {
  //if so
    //remove node from parent list
    var child = this.parent.children.indexOf(this);
    this.parent.children.splice(child, 1);
    //change parent property to null
    this.parent = null;
    return true;
  //else if not so
  } else {
    //check for tree children
    if (this.children.length) {
      return _.any(this.children, child => {
        return child.removeFromParent(value) === true;
      });
    }
  }
  return false;
};

treeMethods.traverse = function(callback) {
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
