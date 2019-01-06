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
var path = require('path'),
  fs = require('fs'),
  seach = require('recursive-search'),
  config = require('../../config');

var tDir = config._fileDir,
  sDir = config._saveDir;

var filelist = seach.recursiveSearchSync(/.gitignore$/, tDir);
var customllist = seach.recursiveSearchSync(/.gitignore$/, sDir);
var ignorefiles = [...filelist, ...customllist];

console.log(ignorefiles);

var filemap = {},
  files = [];

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function descending(a, b) {
  return b < a ? -1 : b > a ? 1 : 0;
}

ignorefiles.forEach(function(file) {
  var name = path.basename(file, config._ext).toLowerCase();
  filemap[name] = file;
  files.push(name);
});

exports.filemap = filemap;
exports.filelist = files.sort(ascending);
