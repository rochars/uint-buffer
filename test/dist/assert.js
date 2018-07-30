/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

/**
 * @fileoverview A minimalistic assertion lib that runs on very old browsers.
 * Tested on IE8+ running on VMs and on IE5+ running on the IE emulator.
 * inspired by Chai. Have:
 * - assert.equal(a, b, m)
 * - assert.deepEqual(a, b, m)
 * - assert.throws(func, m)
 * - assert.ok(expr, m)
 */

function isFloat(n){
  return Number(n) === n && n % 1 !== 0;
}
var assert = {
  'equal': function(x, y, m) {
    var error = false;
    if (isFloat(x) || isFloat(y)) {
      if (parseFloat(x).toFixed(20) !== parseFloat(y).toFixed(20)) {
        throw new Error(x + ' != ' + y);
      }
    } else {
      if (x !== y) {
        throw new Error(x + ' != ' + y);
      }
    }
  },
  'deepEqual': function(x, y, m) {
    var error = false;
    if (x.length !== y.length) {
      throw new Error(x + ' != ' + y);
    } else {
      var i = 0;
      for (i = 0; i < x.length; i++) {
        if (isFloat(x[i]) || isFloat(y[i])) {
          if (x[i].toFixed(20) !== y[i].toFixed(20)) {
            throw new Error(x + ' != ' + y);
          }
        } else {
          if (x[i] !== y[i]) {
            throw new Error(x + ' != ' + y);
          }
        }
      }
    }
  },
  'throws': function(x, m) {
    var error = false;
    try {
      x();
    } catch(err) {
      error = true;
    }
    if (!error) {
      throw new Error('Expected a error.');
    }
  },
  'ok': function(x, m) {
    if (!x) {
      throw new Error(x + ' expected to be True.');
    }
  }
}
