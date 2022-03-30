#!/bin/bash

# IMPORTANT
# ---------
# Do not modify this file.

set -e # exit with nonzero exit code if anything fails

# get GIT url

GIT_URL=`git config --get remote.origin.url`
if [[ $GIT_URL == "" ]]; then
  echo "This project is not configured with a remote git repo".
  exit 1
fi
git checkout main
git branch -D gh-pages
git checkout -b gh-pages
yarn build-gh-pages

# inside this git repo we'll pretend to be a new user
git config user.name "Roderick Hsiao"
git config user.email "roderickhsiao@gmail.com"

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add .
git add -f dist
git commit -m "Deploy Example to GitHub Pages"

# Force push from the current repo's main branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force --quiet $GIT_URL main:gh-pages > /dev/null 2>&1
git push origin gh-pages
git checkout main
