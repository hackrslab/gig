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
    fs  = require('fs'),
    colors = require('colors'),
    config = require('../../config'),
    mkdirp = require('mkdirp');

var sDir = config._saveDir;

exports.exec = function() {

  fs.exists(config._saveDir, function(exists) {
        
    if(!exists) mkdirp.sync(sDir,0755);
        
    var msg ='Initialized gig : '.green+'\n';
    msg+='custom template save directory: '.yellow +' '+sDir.cyan;
    process.stdout.write(msg+'\n');
    
  });
};
