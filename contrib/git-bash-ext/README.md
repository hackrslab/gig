# Git Ignore Bash Extension

Don't need to install NodeJS

## Install

```shell
# stable version
$ wget --no-check-certificate https://raw.github.com/insanehong/gig/master/contrib/git-bash-ext/contrib/installer.sh -O - | bash
# or
$ wget --no-check-certificate https://raw.github.com/insanehong/gig/master/contrib/git-bash-ext/contrib/installer.sh -O - | sudo bash

# unstable version
$ wget --no-check-certificate https://raw.github.com/dgkim84/gig/master/contrib/git-bash-ext/contrib/installer.sh -O - | bash
# or
$ wget --no-check-certificate https://raw.github.com/dgkim84/gig/master/contrib/git-bash-ext/contrib/installer.sh -O - | sudo bash
```

## Usage

* git ignore init
* git ignore update
* git ignore list
* git ignore add
* git ignore apply

```shell
$ git ignore
usage: git ignore <subcommand>

Available subcommands are:
          update - update git ignore extension

          init [template[ template ...]] - initialize .gitignore (remove and apply)
          list - list tmeplate
          add <patten> - append ignore pattern to .gitignore
          apply <template name> [template ...] - apply template to .gitignore

git ignore <subcommand> help

Distributed under MIT License. Written by Daegeun Kim - @GeekDani
```

### git ignore list / git ign list

```shell
$ git ignore list java
Actionscript Android AppceleratorTitanium Autotools Bancha C++
 C CakePHP CFWheels Clojure CMake CodeIgniter
 Compass Concrete5 Coq Dart Delphi Django
 Drupal Eagle Erlang ExpressionEngine Finale ForceDotCom
 FuelPHP gcov Archives CVS Eclipse Emacs
 Espresso FlexBuilder IntelliJ Linux Matlab Mercurial
 ModelSim MonoDevelop NetBeans OSX PhPStorm PyCharm
 Quartus2 Redcar RubyMine SASS SBT SublimeText
 SVN Tags TextMate vim VirtualEnv Windows
 XilinxISE Go Grails GWT Haskell **Java**
 Jboss Jekyll Joomla Jython Kohana LaTeX
 Leiningen LemonStand Lilypond Lithium Magento Maven
 nanoc Node Objective-C OCaml Opa opencart
 OracleForms Perl PlayFramework Plone Python Qooxdoo
 Qt R Rails RhodesRhomobile Ruby Scala
 Sdcc SeamGen SketchUp SugarCRM Symfony Symfony2
 SymphonyCMS Target3001 Tasm Textpattern TurboGears2 Typo3
 Unity VisualStudio Waf WordPress Yii ZendFramework
```
### git ignore apply / git ign apply

```shell
$ git ignore apply java sbt
git ignore apply java sbt
Added ignore tmeplate - java
Added ignore tmeplate - sbt

$ cat .gitignore
### java
*.class

# Package Files #
*.jar
*.war
*.ear
### sbt
# SBT .gitignore
# recommended: http://code.google.com/p/simple-build-tool/wiki/Setup#Version_Control

target/
lib_managed/
src_managed/
```

