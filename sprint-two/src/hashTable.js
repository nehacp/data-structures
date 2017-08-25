

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (index === 0){
    this._count++;
    index = this._count;
  }
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var erase = function (value, key, storage) {
    if (key === index){
       storage.splice(key, 1);
    }
  }
  this._storage.each(erase);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
