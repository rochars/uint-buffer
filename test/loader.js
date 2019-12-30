/**
 * Copyright (c) 2018-2019 Rafael da Silva Rocha.
 * https://github.com/rochars/uint-buffer
 *
 */

let UintBuffer;

// Load the class from the UMD bundle
if (process.argv[3] == '--umd') {
	console.log('umd tests');
	UintBuffer = require('../dist/uint-buffer.js').UintBuffer;

// Load the class from the source file
} else {
	console.log('source tests');
	require = require("esm")(module);
	global.module = module;
	UintBuffer = require('../index.js').UintBuffer;
}

module.exports = UintBuffer;
