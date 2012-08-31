// nodeunit tests for encdec.js
var encdec = require('../lib/encdec');

exports.group = {
  setUp: function(callback) {
    this.base58 = encdec.create();
    callback();
  },

  testBase58Encode: function(test) {
    test.expect(5);
    test.equals(this.base58.encode(0), '');
    test.equals(this.base58.encode(-1), '');
    test.equals(this.base58.encode(10002343), 'Tgmc');

    // Call encode on the same number to check the cache
    // returns the same result
    test.equals(this.base58.encode(1000), 'if');
    test.equals(this.base58.encode(1000), 'if');

    test.done();
  },

  testBase58Decode: function(test) {
    test.expect(5);

    test.equals(this.base58.decode('Tgmc'), 10002343);
    test.equals(this.base58.decode('if'), 1000);

    // Call decode a few times on the same number to check the cache is
    // working correctly
    test.equals(this.base58.decode('if'), 1000); 
    test.equals(this.base58.decode('if'), 1000); 

    test.equals(this.base58.decode(''), 0);

    test.done();
  },

  tearDown: function(callback) {
    callback();
  }
};