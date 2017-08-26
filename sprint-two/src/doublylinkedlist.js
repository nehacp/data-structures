var DoublyLinkedList = function() {
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
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.addToHead = function (value) {
    var node = Node(value);

    if (this.head === null){
      this.head = node;  
      this.tail = node;  
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
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
      this.head.previous = null;
    }
    return output.value;
  };
  
  list.removeTail = function() {
    var output = this.tail;
    if (!this.tail.previous) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    return output.value;
  
  };

  list.contains = function(target) {
    //linear time
    function findValue(node) {
      if(node.value === target) {
        return true;
      } else {
        return (node.next) ? findValue(node.next) : false;
      }
    }
    return findValue(this.head);
  };

  return list;
};

var Node = function(value) {
  //constant time
  var node = {};
  node.previous = null;
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
