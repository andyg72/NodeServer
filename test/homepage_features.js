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

  it('should have our names in it', function() {
    casper.thenOpen(host + 'gitusers', function() {
      expect('body').to.include.text('Andy');
    });
  });

  it('should return the property specified as the url parameter', function() {
    casper.thenOpen(host + 'userdetails/?property=login', function() {
      expect('body').to.include.text('stepholdcorn', 'andyg72');
    });
  });

  it('should return the property specified as the final path of URL', function() {
    casper.thenOpen(host + 'userdetails/id', function() {
      expect('body').to.include.text('9577604', '8938227');      
    });
  });

});