#!/usr/bin/env node

'use strict';

var bases = require('./bases');
var from = process.argv[2];
var to = process.argv[3];
var text = process.argv[4];

if (!bases.KNOWN_ALPHABETS[from] || !bases.KNOWN_ALPHABETS[to]) 
  throw new Error('Valid bases are: ' + Object.keys(bases.KNOWN_ALPHABETS).join(','));

console.log(bases.toBase(bases.fromBase(text, from), to));