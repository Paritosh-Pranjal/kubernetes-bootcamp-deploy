FROM openjdk:11.0-jdk-slim
WORKDIR /card-service
COPY target/*.jar /card-service/app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "/card-service/app.jar"]