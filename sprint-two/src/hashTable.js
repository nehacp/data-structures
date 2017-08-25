

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
  this._keys = {};
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i in this._keys){
    if (this._keys[i] === index) {
      this._count++;
      index = this._count;
    }
  }
  this._keys[k] = index;
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = this._keys[k];
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = this._keys[k];
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
