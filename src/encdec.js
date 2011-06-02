// base-encode.js
//

function BaseEncoder(alphabet) {
    var baseCount = alphabet.length;

    return {
        encode : function(num) {
			var encode = '';
	        if (num < 0) {
	            return '';
	        }

	        while (num >= baseCount) {
	            var mod = num % baseCount;
	            encode = alphabet[mod] + encode;
	            num = parseInt(num / baseCount, 10);
	        }

	        if (num) {
	            encode = alphabet[num] + encode;
	        }

	        return encode;
        },
               
        decode : function(s) {
			var decoded = 0,
	            multi = 1;

			// Reverse s
            s = s.split('').reverse().join('');

	        for (var i = 0, max = s.length; i < max; i++) {
	            decoded += multi * alphabet.indexOf(s[i]);
	            multi = multi * baseCount;
	        }

	        return decoded;
        }
    };
}
