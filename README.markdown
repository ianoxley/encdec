encdec
======
encdec is a small JavaScript library to help you encode numbers and decode strings in a base16, base32, base58, base64...in fact, any base you like :)

Usage
-----

	var base58 = encdec(); // defaults to base58
	console.log(base58.encode(1000000));
	console.log(base58.decode('JRH5H'));
	
	// base32 encoding
	var base32 = encdec('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567');
	console.log(base32.encode(1000000));
	console.log(base32.decode('JRH5H'));
