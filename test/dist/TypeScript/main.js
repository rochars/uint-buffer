"use strict";
/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */
exports.__esModule = true;
/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/uint-buffer
 */
var uint_buffer_js_1 = require("../../../uint-buffer.js");
var tcb = new uint_buffer_js_1["default"](8);
var buffer = [0, 0];
tcb.pack(buffer, 1, 1);
if (buffer[0] !== 0 ||
    buffer[1] !== 1) {
    throw new Error('Error in TypeScript declaration');
}
