#!/usr/bin/env sh

git init
git add -A
read -p '请输入更新注释' comment
git commit -m comment
git push -f git@github.com:Kshaoye/K-BLOG.git master