FROM openjdk:11.0-jdk-slim
WORKDIR /test-lab-service
COPY target/*.jar /test-lab-service/app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "/test-lab-service/app.jar"]