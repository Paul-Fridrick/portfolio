FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --configuration=production

FROM nginx:alpine

# 👇 copie les vrais fichiers Angular !
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html

EXPOSE 80
