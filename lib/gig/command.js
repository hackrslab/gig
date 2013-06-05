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
    desc : 'Display template condition.',
    guide : 'gig show [templates,[templates]]'
  },
  gen : {
    args : true,
    desc : 'Create .gitignore files. If aleady .gitignore file exists: append to .gitignore',
    guide : 'gig show [templates,[templates]]'

  },
  pkg : {
    args : true,
    options : {
      name : String
    },
    desc : 'Create custom template. If aleady same template file exists : append to templae file',
    guide : 'gig pkg -name <template name> [templates,[templates]]'
  } 
};

function abort(msg) {
  msg = msg || '';
  process.stdout.write(msg+'\n');
  process.exit(1);
}

function existtask(cmd) {
  var info = 'Fatal error:'.red +' \''.yellow+cmd.yellow+'\' is not a gig command. See '.yellow+'\'gig --help\''.green;
  abort(info);
}

function emptyparam(task) {
  var msg = 'Fatal error: '.red +'Missing options or arguments. Nothing specified.'.yellow+'\n';
  msg +='Maybe you wanted to say '.red + '\''+command.cmdlist[task].guide.green +'\''.green;  
  abort(msg);    
}

command.exec = function(cmd,templates,options) {
  
  if(!command.cmdlist[cmd]) {
    existtask(cmd);
    return ;
  }

  if(command.cmdlist[cmd].args && !templates.length) {
    emptyparam(cmd);
    return ;
  }
  
  if(command.cmdlist[cmd].options) {
    Object.keys(command.cmdlist[cmd].options).forEach(function(opt) {
      if(!options[opt] && typeof options[opt] !== command.cmdlist[cmd].options[opt]) {
        emptyparam(cmd);
      };
    });
  }

  var task = require('./'+cmd);
  task.exec(templates,options);
};