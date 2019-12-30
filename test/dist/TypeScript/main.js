"use strict";
/*
 * Copyright (c) 2018-2019 Rafael da Silva Rocha.
 */
exports.__esModule = true;
/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/uint-buffer
 */
var index_js_1 = require("../../../index.js");
var tcb = new index_js_1.UintBuffer(8);
var buffer = [0, 0];
tcb.pack(buffer, 1, 1);
