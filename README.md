# gig

gig is help you create `.gitignore` files for your git repository.

## install

```
$ npm install -g gig
```

## update

```
$ npm update -g gig
```

## uasge

### generate .gitignore file

generate `.gitignore` file for your git repository

```
// If aleady `.gitignore` file exists, append  conditions to `.gitignore` file.
$ gig gen java intellij sublimetext  

// If do you want to overrride `.gitignore` file, usable to options : --override (shortcut : -o) 
$ gig gen -o java intellij sublimetest 

```

### packaging template

```
// If aleady 'mypakage' file exists, append conditions to 'mypakage' file.
$ gig pkg -name 'mypakage' java intellij sublimetext  

// if do you want to override `mypakage` file,usable to options : --override (shortcut : -o) 
$ gig pkg -name 'mypakage' -o java intellij sublimetext  

```

### Display ignore conditions.

```
$ gig show java intellij sublimetext  
```

### More Infomations

```
$ gig --help
```
# LICENCE

## MIT LICENSE

The MIT License

Copyright (c) 2013 The gig Authors

See the LICENSE file for details. 

