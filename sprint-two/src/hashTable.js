

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //linear time
  var index = getIndexBelowMaxForKey(k, this._limit);
  var spot = this._storage.get(index);
  if (!spot) {
    spot = [];
  }
  var place = spot.findIndex(tuple => tuple[0] === k);
  (place !== -1) ? spot[place][1] = v : spot.push([k, v]);
  this._storage.set(index, spot);
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
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each((value, i, storage) => {
    if (i === index) {
      _.any(value, (tuple, j) => {
        if (tuple[0] === k) {
          value.splice(j, 1);
          return true;
        }
        return false;
      });
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
