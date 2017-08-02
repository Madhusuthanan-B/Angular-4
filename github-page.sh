#!/bin/bash
set -x -e
git clone git@github.com:$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME.git -b gh-pages public
cd ReusableModules
npm install
npm run build
cd ../..
mkdir -p public/ReusableModules
cp examples/ReusableModules/public/* public/ReusableModules
cd public
git config --global user.email "madhub081011@gmail.com"
git config --global user.name $CIRCLE_PROJECT_USERNAME
git add .
git commit -m "publi:ship: $CIRCLE_BUILD_NUM"
git push origin gh-pages