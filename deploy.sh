#!/usr/bin/env sh

set -e
# 清空dist目录，重新构建项目
rm -rf docs/.vitepress/dist/
yarn docs:build
# 进入dist目录，写域名别名
cd docs/.vitepress/dist
echo 'www.zhou-kai.com' > CNAME
# 发布Github Page
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Kshaoye/kshaoye.github.io.git master
cd -
# 返回到项目根目录
# 调用 pushCode.sh 同步项目源码到 GitHub
# 询问用户是否需要同步项目源码到 GitHub
read -p '是否需要同步项目源码到 GitHub？(y/n): ' confirm
if [ "$confirm" = "y" ]; then
  ./pushCode.sh
else
  echo '已跳过同步源码步骤。'
fi