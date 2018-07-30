/**
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/uint-buffer
 *
 */

let UintBuffer;

// UMD bundle
if (process.argv[3] == '--umd') {
	console.log('umd tests');
	UintBuffer = require('../uint-buffer.umd.js');

// Source
} else {
	require = require("esm")(module);
	global.module = module;
	console.log('Source tests');
	UintBuffer = require('../uint-buffer.js').default;
}

module.exports = UintBuffer;
