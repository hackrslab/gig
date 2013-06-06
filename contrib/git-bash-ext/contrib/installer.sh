#!/bin/bash
INSTALL_PREFIX=${INSTALL_PREFIX-"/usr/local/bin"}
REPO_HOME=${REPO_HOME-"https://github.com/dgkim84/gig"}
GIG_PATH="/usr/local/lib/gig"
BRANCH=${BRANCH-"master"}
MAINFILES="git-ignore git-ign"
SCRIPTS=("git-ignore-env" \
  "git-ignore-init" \
  "git-ignore-list" \
  "git-ignore-apply" \
  "git-ignore-add" \
  "git-ignore-update" \
)

if [ -d "$GIG_PATH" -a -d "$GIG_PATH/.git" ]; then
  echo # pass
else
  git clone $REPO_HOME $GIG_PATH --branch $BRANCH
fi
cd $GIG_PATH && git fetch --all && git reset --hard origin/$BRANCH > /dev/null
cd $GIG_PATH && git submodule init && git submodule update

install -v -d -m 0755 "$INSTALL_PREFIX" > /dev/null
for FILE in $MAINFILES; do
  install -v -b -m 0755 "$GIG_PATH/contrib/git-bash-ext/$FILE" "$INSTALL_PREFIX" > /dev/null
done
for SCRIPT in ${SCRIPTS[@]}; do
  install -v -b -m 0644 "$GIG_PATH/contrib/git-bash-ext/$SCRIPT" "$INSTALL_PREFIX" > /dev/null
done

echo
if [ -f `which git-ignore` ]; then
  echo "Successful - try 'git ignore' command"
else
  echo "Error. git-ignore not found"
fi

