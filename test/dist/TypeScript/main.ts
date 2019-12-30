/*
 * Copyright (c) 2018-2019 Rafael da Silva Rocha.
 */

/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/uint-buffer
 */

import { UintBuffer } from '../../../index.js'

let tcb = new UintBuffer(8);
let buffer = [0, 0];
tcb.pack(buffer, 1, 1);
