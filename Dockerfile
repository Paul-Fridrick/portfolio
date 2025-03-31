FROM node:latest AS build
 
 WORKDIR /app
 
 COPY package*.json ./
 RUN npm install
 
 COPY . .
 RUN npm run build --configuration=production
 
 FROM nginx:latest
 COPY --from=build /app/dist/portfolio /usr/share/nginx/html
 
 # Exposer le port 80
 EXPOSE 80
 