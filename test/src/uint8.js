/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Test 8-bit integers, unsigned.
 * @see https://github.com/rochars/uint-buffer
 */

var UintBuffer = UintBuffer || require('../../test/loader.js');
var assert = assert || require('assert');

describe('8-bit integers, unsigned', function() {  
  var tcb = new UintBuffer(8);

  // zero
  it('pack 0', function() {
    var buffer = [];
    tcb.pack(buffer, 0); // ommit the index, ==0
    assert.deepEqual(buffer, [0x00]);
  });
  it('unpack 0', function() {
    assert.deepEqual(tcb.unpack([0x00]), 0);
  });

  // max
  it('pack 255', function() {
    var buffer = [];
    tcb.pack(buffer, 255); // ommit the index, ==0
    assert.deepEqual(buffer, [0xff]);
  });
  it('unpack 255', function() {
    assert.deepEqual(tcb.unpack([0xff]), 255);
  });

  // Overflow
  it('throw error if pack -1', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, -1); // ommit the index, ==0
    }, /Overflow/);
  });
  it('throw error if pack 256', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, 256); // ommit the index, ==0
    }, /Overflow/);
  });
  it('throw error if pack -Infinity', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, -Infinity); // ommit the index, ==0
    }, /Overflow/);
  });
  it('throw error if pack Infinity', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, Infinity); // ommit the index, ==0
    }, /Overflow/);
  });

  // NaN
  it('throw error if pack NaN', function() {
    assert.throws(function(){
      var buffer = [];
      tcb.pack(buffer, NaN); // ommit the index, ==0
    }, /NaN/);
  });

  // random values, with index
  it('pack 1', function() {
    var buffer = [];
    tcb.pack(buffer, 1, 0);
    assert.deepEqual(buffer, [0x01]);
  });
  it('unpack 1', function() {
    assert.deepEqual(tcb.unpack([0x01], 0), 1);
  });
});
