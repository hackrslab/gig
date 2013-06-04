var option = module.exports = {};

var optlist = {
  help :  {
    shortcut : 'h',
    type : Boolean,
    desc : 'Display help text'
  },
  version : {
    shortcut : 'v',
    type : Boolean,
    desc : 'Display currently version'
  }
};

var known = {},
    shortcut = {};

Object.keys(optlist).forEach(function(key) {
  known[key] = optlist[key].type;
  if(optlist[key].shortcut) shortcut[optlist[key].shortcut] = '--' + key;
});

option.optlist = optlist;
option.known = known;
option.shortcut = shortcut;