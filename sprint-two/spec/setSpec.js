describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should take objects and lists', function () {
    set.add({a: 1, b: 2});
    expect(set.contains({a: 1, b: 2})).to.equal(true);
    set.add([1, 2, 3, 4]);
    expect(set.contains([1, 2, 3, 4])).to.equal(true);
    set.add([]);
    expect(set.contains([])).to.equal(true);
  });

  it('should handle numbers and booleans', function () {
    set.add(5);
    expect(set.contains(5)).to.equal(true);
    set.add(true);
    expect(set.contains(true)).to.equal(true);

  });

  it('should throw error for invalid input', function () {
    var a;
    expect(set.add.bind(null, a)).to.throw('Input not valid');
    expect(set.add.bind(set, a)).to.throw('Input not valid');
    expect(set.add.bind(this, a)).to.throw('Input not valid');
    expect(set.add.bind({}, a)).to.throw('Input not valid');  
  });

});
