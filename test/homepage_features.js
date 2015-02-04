describe('homepage', function() {

var host = 'http://localhost:9999/';

  before(function(){
    casper.start(host);
  });

  it('should say hello world', function(){
    casper.then(function() {
      expect('body').to.have.text('Hello World');
    });
  });

  it('should say hello Steph!', function() {
    casper.thenOpen(host + '?name=Steph', function() {
      expect('body').to.have.text('Hello Steph');
    });
  });

  it('should return a JSON object', function() {
    casper.thenOpen(host + 'beverages', function() {
      expect('body').to.have.text('{"Tea":"Tetley"}');
    });
  });

});