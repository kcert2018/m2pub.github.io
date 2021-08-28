#!/bin/bash
set -e
current_dir=$(pwd); cd ../../; project_dir=$(pwd); cd $current_dir
source $project_dir/brand-env/env

echo
echo " - ${brand_NAME}PUB 블로그 작성을 위한 Jekyll 이미지를 만듭니다."
echo

echo "  브랜드   : $brand_NAME"
echo "  프로젝트 : $project_dir"
echo

cd $project_dir/docker

set +e
docker rmi m2/pub-jekyll:0.1
set -e
docker-compose build pub-jekyll
cd $current_dir
