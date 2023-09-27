#!/bin/bash

source .deploy.env

echo "> gradle 빌드  "
./gradlew clean build

echo "> 도커 빌드"
docker build -t slbin/dino-dev .

echo "> 도커 로그인"
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

echo "> 도커 허브 푸시"
docker push slbin/dino-dev

echo -e "\033[32m > AWS docker-compose shell 실행 \033[0m"
ssh -i $AWS_PEM $AWS_USER@$AWS_IP << EOF
    echo "디렉토리 이동"
    cd /home/ubuntu/spring
    echo "쉘 실행"
    $SHELL_RUN
EOF