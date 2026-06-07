FROM node:22-alpine AS frontend-build
WORKDIR /frontend
COPY frontend/frontend/package*.json ./
RUN npm ci
COPY frontend/frontend/ ./
RUN npm run build

FROM maven:3.9-eclipse-temurin-17 AS backend-build
WORKDIR /backend
COPY backend/pom.xml ./
COPY backend/src ./src
COPY --from=frontend-build /frontend/dist ./src/main/resources/static
RUN mvn package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=backend-build /backend/target/*.jar app.jar
EXPOSE 10000
CMD ["sh", "-c", "SPRING_DATASOURCE_URL=jdbc:postgresql://${DATABASE_URL#*@} exec java -jar app.jar"]
