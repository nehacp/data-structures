

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //constant time
  var index = getIndexBelowMaxForKey(k, this._limit);
  var spot = this._storage.get(index);
   if (!spot){
   	spot = {};
   }
   spot[k] = v;
   this._storage.set(index, spot);
};

HashTable.prototype.retrieve = function(k) {
  //constant time
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  // linear time
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each((value, i, storage) => {
    if (i === index) {
       delete storage[i][k];
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
