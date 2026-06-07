# WSC Competition App

Full-stack World Scholar's Cup competition platform built with React, Spring Boot,
and PostgreSQL.

## Deploy to Render

1. Push this repository to GitHub.
2. Open `https://dashboard.render.com/blueprints`.
3. Select **New Blueprint Instance**, connect this repository, and deploy it.

The included `render.yaml` creates the web app and a PostgreSQL database. The
Docker build packages the React frontend into the Spring Boot service, so the
entire app is available from one `onrender.com` address.

The free PostgreSQL database expires after 30 days. Upgrade it in Render before
then if the app's data needs to remain available.

## Local development

Set `SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME`, and
`SPRING_DATASOURCE_PASSWORD`, then start the backend:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

Start the frontend in a second terminal:

```powershell
cd frontend\frontend
npm run dev
```
