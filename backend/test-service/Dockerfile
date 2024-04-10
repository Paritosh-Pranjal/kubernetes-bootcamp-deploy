FROM openjdk:11.0-jdk-slim
WORKDIR /test-service
COPY target/*.jar /test-service/app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "/test-service/app.jar"]