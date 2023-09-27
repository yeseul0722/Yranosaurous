#!/bin/bash

source .deploy.env

echo "\033[32m> env 파일 값 체크 \033[0m"
echo $AWS_PEM
echo $AWS_USER
echo $AWS_IP
echo $AWS_ROUTE

echo -e "\033[32m > 패키지 업데이트 \033[0m"
yarn install

echo -e "\033[32m > 리액트 빌드 \033[0m"
yarn build

echo -e "\033[32m > AWS 폴더 삭제 \033[0m"
ssh -i $AWS_PEM $AWS_USER@$AWS_IP "rm -rf $AWS_DELETE_ROUTE"

echo -e "\033[32m > AWS로 build 폴더 전송 \033[0m"
scp -r -i $AWS_PEM ./build $AWS_USER@$AWS_IP:$AWS_ROUTE