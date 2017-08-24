var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.remove = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.count - this.remove;
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    this.remove++;
    var first = this.storage[this.remove];
    delete this.storage[this.remove];
    return first;
  }
};
