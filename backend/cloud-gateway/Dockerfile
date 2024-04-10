FROM openjdk:11.0-jdk-slim
WORKDIR /cloud-service
COPY target/*.jar /cloud-service/app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "/cloud-service/app.jar"]