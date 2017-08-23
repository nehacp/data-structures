var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    var last = storage[count];
    delete storage[count];
    count--;
    return last;
  };

  someInstance.size = function() {
    return (count < 0) ? 0 : count;
  };

  return someInstance;
};
