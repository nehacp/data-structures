describe('doublylinkedList', function() {
  var doublylinkedList;

  beforeEach(function() {
    doublylinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublylinkedList).to.have.property('head');
    expect(doublylinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", "contains", "addToHead" and "removeTail"', function() {
    expect(doublylinkedList.addToTail).to.be.a('function');
    expect(doublylinkedList.removeHead).to.be.a('function');
    expect(doublylinkedList.contains).to.be.a('function');
    expect(doublylinkedList.addToHead).to.be.a('function');
    expect(doublylinkedList.removeTail).to.be.a('function');
  
  });

  it('should designate a new tail when new nodes are added', function() {
    doublylinkedList.addToTail(4);
    expect(doublylinkedList.tail.value).to.equal(4);
    doublylinkedList.addToTail(5);
    expect(doublylinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added', function() {
    doublylinkedList.addToHead(1);
    expect(doublylinkedList.head.value).to.equal(1);
    doublylinkedList.addToHead(2);
    expect(doublylinkedList.head.value).to.equal(2);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublylinkedList.addToTail(4);
    doublylinkedList.addToTail(5);
    expect(doublylinkedList.head.value).to.equal(4);
    doublylinkedList.removeHead();
    expect(doublylinkedList.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublylinkedList.addToTail(4);
    doublylinkedList.addToTail(5);
    expect(doublylinkedList.head.value).to.equal(4);
    doublylinkedList.removeHead();
    expect(doublylinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublylinkedList.addToTail(4);
    expect(doublylinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublylinkedList.addToTail(4);
    doublylinkedList.addToTail(5);
    expect(doublylinkedList.contains(4)).to.equal(true);
    expect(doublylinkedList.contains(5)).to.equal(true);
    expect(doublylinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublylinkedList.addToTail(4);
    doublylinkedList.addToTail(5);
    doublylinkedList.removeHead();
    expect(doublylinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublylinkedList
});
