var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};

  obj.count = 0;
  obj.remove = 0;
  obj.storage = {};

  extend(obj, queueMethods);

  return obj;
};

var queueMethods = {
  size: function() {
    return this.count - this.remove;
  },
  enqueue: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  dequeue: function() {
    if(this.count - this.remove > 0) {
      this.remove++;
      var first = this.storage[this.remove];
      delete this.storage[this.remove];
      return first;
    }
  }
};

var extend = function(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
}
