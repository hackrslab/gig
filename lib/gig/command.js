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

var colors = require('colors');

var command = module.exports = {};
    
command.cmdlist = {
  show : {
    args : true,
    desc : 'Display template condition.'
  },
  gen : {
    args : true,
    desc : 'Create .gitignore files.'
   
  },
  pkg : {
    args : true,
    desc : 'Create custom template.'
  } 
};

function writeln(msg) {
  msg = msg || '';
  process.stdout.write(msg+'\n');
}

function existtask(cmd) {
  var info = 'Fatal error:'.red +' \''.yellow+cmd.yellow+'\' is not a gig command. See '.yellow+'\'gig --help\''.green;
  writeln(info);
}

function emptyparam(task) {
  var msg = 'Fatal error: '.red +'Nothing specified.'.yellow+'\n';
  msg +='Maybe you wanted to say '.red + '\'gig '.green +task.green+' [templates,[templates]]\''.green;  
  writeln(msg);    
}

command.exec = function(cmd,templates) {
  if(!command.cmdlist[cmd]) {
    existtask(cmd);
    return ;
  }

  if(command.cmdlist[cmd].args && !templates.length) {
    emptyparam(cmd);
    return ;
  }
  
  var task = require('./'+cmd);
  
  task.exc(templates);
};