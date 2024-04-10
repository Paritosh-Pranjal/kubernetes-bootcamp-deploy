FROM openjdk:11.0-jdk-slim
WORKDIR /lab-service
COPY target/*.jar /lab-service/app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "/lab-service/app.jar"]