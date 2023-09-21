FROM openjdk:17-oracle

COPY ./build/libs/dinosaur-0.0.1-SNAPSHOT.jar app.jar

ENV TZ Asia/Seoul

ENTRYPOINT ["java", "-jar", "app.jar"]