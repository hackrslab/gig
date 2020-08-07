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
  init : {
    args :false,
    desc : 'initialize gig. make directory for save custom template. When installing, this command executes automatically.'
  },
  show : {
    args : true,
    desc : 'Display template condition.',
    guide : 'gig show [templates,[templates]]'
  },
  gen : {
    args : true,
    options : {
      override : [Boolean,false]
    },
    desc : 'Create .gitignore files. If a .gitignore file exists   : append ignore conditions to .gitignore',
    guide : 'gig gen [-override] [templates,[templates]]'

  },
  pkg : {
    args : true,
    options : {
      name : [String,true],
      override : [Boolean,false]
    },
    desc : 'Create custom template. If same template file already exists : append ignore conditions to the existing template file',
    guide : 'gig pkg -name <template name> [-override] [templates,[templates]]'
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
      if(!options[opt] && typeof options[opt] !== command.cmdlist[cmd].options[opt][0] && command.cmdlist[cmd].options[opt][1]===true) {
        emptyparam(cmd);
      };
    });
  }

  var task = require('./'+cmd);
  task.exec(templates,options);
};
