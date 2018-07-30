/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Check the UintBuffer API.
 * @see https://github.com/rochars/uint-buffer
 */

var UintBuffer = UintBuffer || require('../../test/loader.js');
var assert = assert || require('assert');

describe('16-bit integers, unsigned', function() { 
  var tcb = new UintBuffer(16);

  it('have the bits property', function() {
    assert.equal(tcb.bits.constructor, Number);
  });
  it('have the bytes property', function() {
    assert.equal(tcb.bytes.constructor, Number);
  });
  it('have the pack method', function() {
    assert.equal(typeof tcb.pack, 'function');
  });
  it('have the unpack method', function() {
    assert.equal(typeof tcb.unpack, 'function');
  });
});
