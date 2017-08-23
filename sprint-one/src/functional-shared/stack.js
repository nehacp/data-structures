var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.count = 0;
  extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  size: function() {
    return (this.count < 0) ? 0 : this.count;
  },
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function (){
    var last = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return last;
  }
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
}
