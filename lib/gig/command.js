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

var command = module.exports = {};

command.cmdlist = {
  show : {
    task : 'show' ,
    desc : 'Display template condition.'
  },
  gen : {
    task : 'gen',
    desc : 'create .gitignore files.'
   
  },
  pkg : {
    task : 'pkg',
    desc : 'create custom template.'
  } 
};

command.show = function(templates) {

};

command.gen = function(templates) {

};

command.pkg = function(templates) {

};