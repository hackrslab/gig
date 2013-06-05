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
var option = require('./option'),
    command = require('./command'),
    template = require('./template'),
    colors = require('colors');

function pad(str,length) {
  var i=0,
      s=str;

  if(str.length >= length) return str;      
  
  for ( ; i < (length - str.length) ; i++ ) {
    s = s.concat(' ');
  }
  return s;
}

var info = {},  
    options = option.optlist,
    commands = command.cmdlist;

info.title = 'gig is help you create `.gitignore` files for your git repository.\n';
info.usage = 'usage :\n   gig [option] | [commad] [template[,template]]\n';

info.command = 'Here are the commands:\n';

var taskleng = 0;  
Object.keys(commands).forEach(function(task) {
  if(task.length > taskleng) taskleng = task.length;  
});

Object.keys(commands).forEach(function(task) {
  var cmd = pad(task,taskleng);
  info.command+=cmd + '   '+commands[task].desc+'\n'; 
});

info.options = 'Here are the options:\n';

var optleng=0;

Object.keys(options).forEach(function(key) {
  var opt = '--'+key+', -'+options[key].shortcut;
  if(opt.length > optleng) optleng = opt.length;  
});

Object.keys(options).forEach(function(key) {
  var opt = pad('--'+key+', -'+options[key].shortcut,optleng);
  var desc = options[key].desc;
  info.options+=opt+'   '+desc+'\n';
});

info.template = 'Here are the template:\n'

template.filelist.forEach(function(name,i) {
  if(i>0) info.template+=', '; 
  if(i%10==0 && i>0) info.template+='\n';
  info.template+=name.yellow;
});

exports.display = function() {
  Object.keys(info).forEach(function(key) {
    process.stdout.write(info[key]+'\n');    
  });
};