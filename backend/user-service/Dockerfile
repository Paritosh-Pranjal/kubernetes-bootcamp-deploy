FROM openjdk:11.0-jdk-slim
WORKDIR /user-service
COPY target/*.jar /user-service/app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "/user-service/app.jar"]