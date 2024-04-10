FROM openjdk:11.0-jdk-slim
WORKDIR /patient-service
COPY target/*.jar /patient-service/app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "/patient-service/app.jar"]