/**
 * gig
 *  
 * Copyright (c) 2013 Insanehong
 * 
 * Contributors
 *
 * Licensed under the MIT license.
 * https://github.com/insanehong/gig/blob/master/LICENSE
 */
var path = require('path');

var config = {
  title : 'gig',
  version : "0.2.2",
  _baseDir : __dirname,
  _libDir : path.join(__dirname,'lib'),
  _moduleDir : path.join(__dirname,'lib','gig'),
  _fileDir : path.join(__dirname,'gitignore'),
  _ext : '.gitignore',
  _saveDir : path.join(process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,'.gig')
 };

 module.exports = config;
