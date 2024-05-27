#!/usr/bin/env sh

# 检查是否是一个 Git 仓库
if [ ! -d ".git" ]; then
  git init
fi

git add -A
read -p '请输入更新注释: ' comment
git commit -m "$comment"
git push -f git@github.com:Kshaoye/K-BLOG.git master
