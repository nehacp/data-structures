var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var index = 0;
  var removed = 0;

  someInstance.enqueue = function(value) {
    index++;
    storage[index] = value;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() > 0) {
      removed++;
      var first = storage[removed];
      delete storage[removed];
      return first;
    }
  };

  someInstance.size = function() {
    return index - removed;
  };

  return someInstance;
};
