# Étape 1 : Build Angular
FROM node:22-alpine3.22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build 

# Étape 2 : Servir avec Nginx
FROM nginx:alpine
COPY --from=build /app/dist/portfolio /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
