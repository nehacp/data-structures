var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // constant time
  item = JSON.stringify(item);
  if (!item) {
    console.log(this);
    throw new Error('Input not valid');
  }
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  // constant time
  item = JSON.stringify(item);
  return Boolean(this._storage[item]);
};

setPrototype.remove = function(item) {
  // constant time
  item = JSON.stringify(item);
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
