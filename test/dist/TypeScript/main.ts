/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/uint-buffer
 */

import UintBuffer from '../../../uint-buffer.js'

let tcb = new UintBuffer(8);
let buffer = [0, 0];
tcb.pack(buffer, 1, 1);

if (buffer[0] !== 0 ||
	buffer[1] !== 1) {
	throw new Error('Error in TypeScript declaration');
}
