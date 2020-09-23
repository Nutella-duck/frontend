#!/bin/bash

echo "nvm 설정"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

echo "해당 디렉토리 이동"

cd /home/ec2-user/deploy/FrontEnd

echo "실핼중인 프로세스 종료"

kill -9 `ps -ef | grep 'node /home/ec2-user/.nvm/versions/node/v14.12.0/bin/npx serve -s build' | awk '{print $2}'`

echo "package 설치 시작"

npm install

echo "애플리케이션 빌드 시작"
npm run build

echo "app 실행 시작"

nohup npx serve -l 3000 -s build 1>/dev/null 2>&1 &

