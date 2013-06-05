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

var config = require('../config'),
    command = require('./gig/command'),
    colcors = require('colors');

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

gig.tasks = function(task, options) {
  var _task,_templates;

  if(options.version) {
    writeln('gig v'.cyan +gig.version.cyan);
    return ;
  }

  if(options.help || !task.length) {
    var help = require('./gig/help');
    help.display();
    return ;
  }

  var notcommand = ''
  _task = task.shift();
  _templates = task;

  command.exec(_task, _templates, options);
};