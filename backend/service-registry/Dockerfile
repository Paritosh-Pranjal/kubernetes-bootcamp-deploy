FROM openjdk:11.0-jdk-slim
WORKDIR /service-registry
COPY target/*.jar /service-registry/app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "/service-registry/app.jar"]