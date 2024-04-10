FROM openjdk:11.0-jdk-slim
WORKDIR /address-service
COPY target/*.jar /address-service/app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "/address-service/app.jar"]