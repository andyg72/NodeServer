describe('beverages page', function() {

  before(function() {
    casper.start('http://localhost:9999/beverages');
  });

  it('should return a JSON object', function() {
    casper.then(function() {
      expect('body').to.have.text('Tea');
    });
  });
});

