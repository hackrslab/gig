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

var config = require('../config');

var gig = module.exports = {};
  
gig.config = require('../config');
gig.version = gig.config.version;

function write(msg) {
  msg = msg || '';
  process.stdout.write(msg);
}

function writeln(msg) {
  msg = msg || '';
  write(msg+'\n');
}

gig.tasks = function(command, options) {

  if(options.version) {
    writeln('gig v' +gig.version);
    return ;
  }

  if(options.help) {
    var help = require('./gig/help');
    help.display();
    return ;
  }
};