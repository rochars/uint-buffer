/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 * @see https://github.com/rochars/uint-buffer
 */

import closure from 'rollup-plugin-closure-compiler-js';
import fs from 'fs';

// Externs
const externsFile = fs.readFileSync('./externs/uint-buffer.js', 'utf8');

// Legal
const license = '/**\n'+
' * @see https://github.com/rochars/uint-buffer\n' +
' */\n';

// GCC UMD footer, compatible with old browsers, Node and AMD loaders
const footer = 
  "var UintBuffer=exports;" +
  "typeof module!=='undefined'?module.exports=exports :" +
  "typeof define==='function'&&define.amd?define(['exports'],exports) :" +
  "typeof global!=='undefined'?global.UintBuffer=exports:null;";

export default [
  // UMD, minified
  {
    input: 'uint-buffer.js',
    output: [
      {
        file: 'uint-buffer.umd.js',
        format: 'cjs',
        strict: false,
        banner: 'var exports=exports||{};'
      }
    ],
    plugins: [
      closure({
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED',
        warningLevel: 'VERBOSE',
        outputWrapper: license + '%output%' + footer,
        externs: [{src: externsFile + 'exports={};'}]
      })
    ]
  },
];
