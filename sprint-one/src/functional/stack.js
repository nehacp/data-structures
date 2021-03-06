var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.pop = function() {
    var lastElement = storage[count];
    delete storage[count];
    count--;
    return lastElement;
  };

  someInstance.size = function() {
    return (count < 0) ? 0 : count;
  };

  return someInstance;
};
