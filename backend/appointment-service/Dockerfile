FROM openjdk:11.0-jdk-slim
WORKDIR /appointment-service
COPY target/*.jar /appointment-service/app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "/appointment-service/app.jar"]