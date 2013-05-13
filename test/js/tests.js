// tests.js
// --------
// QUnit tests for encdec
//

/* global module, test, equals, expect, encdec, $ */
$(document).ready(function() {

  module('base58', {
    setup: function() {
      var alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
      this.base58 = encdec(alphabet);
      equals(alphabet.length, 58);
    }
  });

  test('base58 encode', function() {
    equals(this.base58.encode(0), '1');
    equals(this.base58.encode(-1), '');
    equals(this.base58.encode(10002343), 'Tgmc');
    equals(this.base58.encode(1000), 'if');
    expect(5);
  });

  test('base58 encode NaN', function() {
    equals(this.base58.encode('foo'), '');
    expect(2);
  });

  test('base58 encode decimal strips anything after decimal point', function() {
    equals(this.base58.encode(1000.123), 'if');
  });

  test('base58 encode undefined', function() {
    equals(this.base58.encode(undefined), '');
  });

  test('reversed string encodes to different value', function() {
    equals(this.base58.encode(255), '5p');
    equals(this.base58.decode('5p'), 255);
    equals(this.base58.decode('p5'), 1338);
  });

  test('base58 decode', function() {
    equals(this.base58.decode('Tgmc'), 10002343);
    equals(this.base58.decode('if'), 1000); 

    equals(this.base58.decode('1'), 0);
    expect(4);
  });

  test('base58 decode not a string', function() {
    equals(this.base58.decode(1000), 0);
    expect(2);
  });

  test('base58 decode undefined returns zero', function() {
    equals(this.base58.decode(undefined), 0);
  });

  module('base32', {
    setup: function() {
      var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
      this.base32 = encdec(alphabet);
      equals(alphabet.length, 32);
    }
  });

  test('base32 encode', function() {
    equals(this.base32.encode(0), 'A');
    equals(this.base32.encode(-1), '');
    equals(this.base32.encode(1000), '7I');
    equals(this.base32.encode(10002343), 'JRH5H');
    expect(5);
  });

  test('base32 decode', function() {
    equals(this.base32.decode('7I'), 1000);
    equals(this.base32.decode('JRH5H'), 10002343);
    equals(this.base32.decode(''), 0);
    expect(4);
  });

  module('base64', {
    setup: function() {
      var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      this.base64 = encdec(alphabet);
      equals(alphabet.length, 64);
    }
  });

  test('base64 encode', function() {
    equals(this.base64.encode(0), 'A');
    equals(this.base64.encode(-1), '');
    equals(this.base64.encode(1000), 'Po');
    equals(this.base64.encode(10002343), 'mJ+n');
    expect(5);
  });

  test('base64 decode', function() {
    equals(this.base64.decode('Po'), 1000);
    equals(this.base64.decode('mJ+n'), 10002343);
    equals(this.base64.decode(''), 0);
    expect(4);
  });

  module('base24', {
    setup: function() {
      var alphabet = 'BCDFGHJKLMNPQRSTVWXZ1345';
      this.base24 = encdec(alphabet);
      equals(alphabet.length, 24);
    }
  });

  test('base24 encode', function() {
    equals(this.base24.encode('0'), 'B');
    equals(this.base24.encode('1'), 'C');
  });

  test('base24 decode', function() {
    equals(this.base24.decode('B'), 0);
    equals(this.base24.decode('C'), 1);
  });

});
