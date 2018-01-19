
mvn clean package -Dmaven.test.skip=true
java -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8000 -jar target/jk-1.0-SNAPSHOT.jar

