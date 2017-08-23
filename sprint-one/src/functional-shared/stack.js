var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.count = 0;
  obj.size = stackMethods.size;
  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;
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
