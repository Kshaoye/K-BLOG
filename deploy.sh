#!/usr/bin/env sh

set -e

rm -rf docs/.vitepress/dist/

yarn docs:build

cd docs/.vitepress/dist

echo 'www.zhou-kai.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:kshaoye/kshaoye.github.io.git master

cd -