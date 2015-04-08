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
    config = require('../../config');

var tDir = config._fileDir,
    sDir = config._saveDir;

var filelist = fs.readdirSync(tDir);
var globallist = fs.readdirSync(path.join(tDir,'Global'));
var customllist = fs.readdirSync(sDir);

var filemap = {},
    files = [];

function ascending(a,b) {
  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function descending(a,b) {
  return (b < a) ? -1 : (b > a) ? 1 : 0;
}

filelist.forEach(function(file) {
  if(file == 'LICENSE' || file == 'README.md') return ;
  var name = path.basename(file,config._ext).toLowerCase();
  filemap[name] = path.join(tDir,file);
  files.push(name);
});

globallist.forEach(function(file) {
  if(file == 'LICENSE' || file == 'README.md') return ;
  var name = path.basename(file,config._ext).toLowerCase();
  filemap[name] = path.join(tDir,'Global',file);
  files.push(name);
});

customllist.forEach(function(file) {
  if(file == 'LICENSE' || file == 'README.md') return ;
  var name = path.basename(file,config._ext).toLowerCase();
  filemap[name] = path.join(sDir,file);
  files.push(name);
});

exports.filemap = filemap;
exports.filelist = files.sort(ascending);
