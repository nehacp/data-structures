

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  //linear time
  var index = getIndexBelowMaxForKey(k, this._limit);
  var spot = this._storage.get(index) || [];

  var place = spot.findIndex(tuple => tuple[0] === k);
  if (place !== -1) { 
    var temp = spot[place][1];
    spot[place][1] = v;
  } else {
    spot.push([k, v]);
    this._size++;
  }
  this._storage.set(index, spot);
  if (this._size >= Math.floor(this._limit * 0.75)) {
    this._resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  //linear time
  var index = getIndexBelowMaxForKey(k, this._limit);
  var spot = this._storage.get(index);
  var result = _.find(spot, (tuple => tuple[0] === k));
  return (result) ? result[1] : undefined; 
};

HashTable.prototype.remove = function(k) {
  // linear time
  var temp;
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each((value, i, storage) => {
    if (i === index) {
      _.any(value, (tuple, j) => {
        if (tuple[0] === k) {
          temp = value.splice(j, 1);
          this._size--;
          return true;
        }
        return false;
      });
    }
  });

  if (this._size <= Math.floor(this._limit * 0.25)) {
    this._resize(this._limit / 2);
  }
  return temp[1];
};

HashTable.prototype._resize = function(limit) {
  var tempStorage = [];
  this._storage.each((value, i, storage) => {
    if (value) {
      _.each(value, tuple => tempStorage.push(tuple));
    }
  });
  this._limit = Math.max(limit, 8);
  this._size = 0; 
  this._storage = LimitedArray(this._limit);
  
  _.each(tempStorage, (tuple) => this.insert(tuple[0], tuple[1]));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
