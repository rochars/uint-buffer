/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Test 16-bit integers, unsigned.
 * @see https://github.com/rochars/uint-buffer
 */

var UintBuffer = UintBuffer || require('../../test/loader.js');
var assert = assert || require('assert');

describe('16-bit integers, unsigned', function() { 
  var tcb = new UintBuffer(16);

  // zero
  it('pack 0', function() {
    var buffer = [];
    tcb.pack(buffer, 0); // ommit the index
    assert.deepEqual(buffer, [0x00, 0x00]);
  });
  it('unpack 0', function() {
    assert.deepEqual(tcb.unpack([0x00, 0x00]), 0);
  });

  // max
  it('pack 65535', function() {
    var buffer = [];
    tcb.pack(buffer, 65535); // ommit the index
    assert.deepEqual(buffer, [0xff, 0xff]);
  });
  it('unpack 65535', function() {
    assert.deepEqual(tcb.unpack([0xff, 0xff]), 65535);
  });

  // Overflow
  it('throw error if pack -1', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, -1); // ommit the index, ==0
    }, RangeError);
  });
  it('throw error if pack 65536', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, 65536); // ommit the index, ==0
    }, RangeError);
  });
  it('throw error if pack -Infinity', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, -Infinity); // ommit the index, ==0
    }, RangeError);
  });
  it('throw error if pack Infinity', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, Infinity); // ommit the index, ==0
    }, RangeError);
  });

  // NaN
  it('throw error if pack NaN', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, NaN); // ommit the index, ==0
    }, TypeError);
  });
});
