#!/bin/bash
git pull 
mvn clean package -Dmaven.test.skip=true
docker rm -f jinxin-jk-dev 
docker rmi -f jinxin-jk:dev 
docker build -t jinxin-jk:dev .
 docker run -d -p 9001:9001 --name jinxin-jk-dev jinxin-jk:dev java -Duser.timezone=GMT+8 -Dspring.profiles.active=dev -jar  /app/app.jar 