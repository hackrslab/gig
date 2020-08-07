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
    config = require('../../config'),
    template = require('./template'),
    colors = require('colors');

function writeln(msg) {
  msg = msg || '';
  process.stdout.write(msg+'\n');
}


exports.exec = function(templates) {
  var notfound = [];
  templates.forEach(function(filename) {
    filename = filename.toLowerCase();
    if(template.filemap[filename]) {
      var file = template.filemap[filename];
      var title = filename+' :\n';
      var data = fs.readFileSync(file,'utf8');
      writeln(title.yellow+data.green);
    } else {
      notfound.push(filename); 
    }
  });

  if(notfound.length) {
    writeln('These templates were not found'.red);
    notfound.forEach(function(template) {
      writeln(template);
    });
  }
};    
