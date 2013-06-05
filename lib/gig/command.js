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
    desc : 'create .gitignore files.'
   
  },
  pkg : {
    args : true,
    desc : 'create custom template.'
  } 
};

var error = {
  error : false,
  msg : null
};

var _cmd , _templte;
/*
if(!command[_task]) {
  var info = 'gig: \''+_task+'\' is not a gig command. See \'gig --help\'';
  writeln(info);
  return ;
}
*/

function emptyparam(task) {
  var msg = 'gig: Nothing specified.'.yellow+'\n';
  msg +='Maybe you wanted to say \'' + 'gig ' +task+' [templates,[templates]]\'';  
  process.stdout.write(msg +'\n');    
}

command.init = function(cmd,templates) {
  
};

command.start = function() {

};