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


exports.exec = function(templates,options) {

  var notfound = [],
      conditions='';
  templates.forEach(function(filename) {
    
    if(template.filemap[filename]) {
      var file = path.join(config._fileDir,template.filemap[filename]);
      var title = '### '+filename+' ###\n';
      var data = fs.readFileSync(file,'utf8');

      conditions+=title + data+'\n';
    } else {
      notfound.push(filename); 
    }
  });

  var cwd = process.cwd();

  filePath = path.join(cwd,config._ext);
  
  if(!fs.existsSync(filePath)) fs.writeFileSync(filePath,conditions,'utf8');
  else fs.appendFileSync(filePath,conditions,'utf8');

  if(!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath,conditions,'utf8');
  } else {
    if(options.override) fs.writeFileSync(filePath,conditions,'utf8');
    else fs.appendFileSync(filePath,conditions,'utf8');
  }

   var filecontent = fs.readFileSync(filePath,'utf8');

  writeln('Completed Generate!\n'.green + filePath.yellow+':'.yellow+'\n'+ filecontent.green);

  if(notfound.length) {
    writeln('Here are not found templates:'.red);
    notfound.forEach(function(template) {
      writeln(template);
    });
  }
};    