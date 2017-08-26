var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //constant time
    var node = Node(value);
    if(this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    //constant time
    var output = this.head;
    if(this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return output.value;
  };

  list.contains = function(target) {
    //linear time
    var self = this;
    if (!self.value) {
      self = this.head;
    }
    if (self.value === target) {
      return true;
    } else {
      return (self.next) ? this.contains.call(self.next, target) : false;
    }
  };
  return list;
};

var Node = function(value) {
  //constant time
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
