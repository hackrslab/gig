# gig

gig helps you create a new `.gitignore` file for your git project.

## contrib
* [Git bash extension - git ignore](https://github.com/hackrslab/gig/tree/master/contrib/git-bash-ext)

## install

```
npm install -g gig 
```

## update

```
npm update -g gig
```

## usage

### generate .gitignore file

generate a `.gitignore` file for your git project

```
# If a `.gitignore` file already exists, append conditions to the `.gitignore` file.
gig gen java intellij sublimetext  

# If you want to overrride a `.gitignore` file, add commands to options : --override (shortcut : -o) 
gig gen -o java intellij sublimetext 

```

### packaging template

pkg command is to create a custom template. 

```
# If a 'mypakage' file already exists, append conditions to the 'mypakage' file.
gig pkg -name 'mypakage' java intellij sublimetext  

# if you want to override a `mypakage` file, add commands to options : --override (shortcut : -o) 
gig pkg -name 'mypakage' -o java intellij sublimetext  

gig show mypakage
*.class

# Package Files #
*.jar
*.war
*.ear

intellij :
*.iml
*.ipr
*.iws
.idea/

sublimetext :
# SublimeText project files
*.sublime-workspace
```

### Display ignore conditions.

```
gig show java intellij sublimetext  
```

### More Information

```
gig --help
```

## gitignore template files sourced in 

[GitHub gitignore repository](https://github.com/github/gitignore)

## Screenshot

![gig](https://raw.github.com/hackrslab/gig/master/screenshot.jpg)

## ChangeLog

[See the ChangeLog](https://github.com/hackrslab/gig/tree/master/ChangeLog)

## LICENCE

## MIT LICENSE

The MIT License

Copyright (c) 2013 The gig Authors

See the [LICENSE](https://github.com/hackrslab/gig/tree/master/LICENSE) file for details. 

