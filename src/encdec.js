// encdec.js
//

/* jshint unused:false */

function encdec(alphabet) {
  var BASE_58 = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';

  alphabet = alphabet || BASE_58;
  var baseCount = alphabet.length;

  return {
    encode : function(num) {
      if (isNaN(num)) {
        return '';
      }

      num = parseInt(num, 10);
      if (num < 0) {
        return '';
      }

      var encode = '';

      while (num >= baseCount) {
        var mod = num % baseCount;
            encode = alphabet[mod] + encode;
            num = parseInt(num / baseCount, 10);
      }

      if (num || num === 0) {
        encode = alphabet[num] + encode;
      }

      return encode;
    },

    decode : function(s) {
      if (typeof s !== 'string') {
        return 0;
      }

      var decoded = 0,
          multi = 1,
          reversed = s.split('').reverse().join('');

      for (var i = 0, max = reversed.length; i < max; i++) {
        decoded += multi * alphabet.indexOf(reversed[i]);
        multi = multi * baseCount;
      }

      return decoded;
    }
  };
}
