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
  // Error on strings
  it('throw error when packing a string with pack()', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, '400'); // ommit the index, ==0
    }, TypeError);
  });
  // Unsafe should not complain about strings
  it('throw no error when packing a string with packUnsafe()', function() {
    var buffer = [];
    tcb.packUnsafe(buffer, 'xxx'); // A string that is not a number
    assert.deepEqual(buffer, [0, 0])
  });
  it('throw no error when packing a number string with packUnsafe()', function() {
    var buffer = [];
    tcb.packUnsafe(buffer, '255'); // A string that represents a number
    assert.deepEqual(buffer, [255, 0])
  });
});

