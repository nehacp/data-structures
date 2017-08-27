describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(10);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(12);
    binarySearchTree.insert(11);
    expect(binarySearchTree.value).to.equal(3);
    expect(binarySearchTree.left.value).to.equal(2);
    expect(binarySearchTree.right.left.value).to.equal(10);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([3, 2, 10]);
  });

  it('should return the max depth of a tree', function() {    
    binarySearchTree.insert(5);
    binarySearchTree.insert(11);
    binarySearchTree.insert(3);
    expect(binarySearchTree._leftDepth).to.equal(2);
    expect(binarySearchTree._rightDepth).to.equal(1);
  });

  it('should rebalance the tree', function() {    
    binarySearchTree.insert(5);
    binarySearchTree.insert(11);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(4);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    expect(binarySearchTree._leftDepth).to.equal(3);
    expect(binarySearchTree._rightDepth).to.equal(2);
    expect(binarySearchTree.value).to.equal(8);
  });

  it('should rebalance the tree if one side has no values', function() {    
    binarySearchTree.insert(11);
    binarySearchTree.insert(12);
    binarySearchTree.insert(13);
    expect(binarySearchTree._leftDepth).to.equal(1);
    expect(binarySearchTree._rightDepth).to.equal(2);
    expect(binarySearchTree.value).to.equal(11);
  });
});
