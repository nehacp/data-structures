var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // constant time
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  // constant time
  return Boolean(this._storage[item]);
};

setPrototype.remove = function(item) {
  // constant time
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
