var extratContact = require('../index');
var should = require('should');

describe('Extract Contact', function() {
  it('should extract nothing', function() {
    var string = 'Curabitur blandit tempus porttitor.';
    var result = extratContact(string);
    result.should.have.property('emails', []);
    result.should.have.property('urls', []);
  });

  it('should extract one email', function() {
    var string = 'Curabitur blandit test@gmail.com tempus porttitor.';
    var result = extratContact(string);
    result.should.have.property('emails', ['test@gmail.com']);
    result.should.have.property('urls', []);
  });

  it('should extract multiple uniques emails', function() {
    var string = 'Curabitur test@gmail.com blandit test2@gmail.com tempus porttitor test2@gmail.com.';
    var result = extratContact(string);
    result.should.have.property('emails', ['test@gmail.com', 'test2@gmail.com']);
    result.should.have.property('urls', []);
  });

  it('should extract url', function() {
    var string = 'Curabitur http://test.com blandit tempus porttitor.';
    var result = extratContact(string);
    result.should.have.property('emails', []);
    result.should.have.property('urls', ['http://test.com']);
  });

  it('should extract multiple uniques urls', function() {
    var string = 'Curabitur http://test.com blandit http://test2.com tempus porttitor http://test2.com';
    var result = extratContact(string);
    result.should.have.property('emails', []);
    result.should.have.property('urls', ['http://test.com', 'http://test2.com']);
  });
});
