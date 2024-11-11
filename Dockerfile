# Étape 1: Utiliser une image Node pour construire l'application
FROM node:latest AS build

WORKDIR /app

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers et construire l'application Angular
COPY . .
RUN npm run build --configuration=production

# Étape 2: Utiliser une image NGINX pour servir l'application Angular
FROM nginx:latest

# Copier les fichiers de build Angular dans le répertoire de NGINX
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

#Build: docker build -t portfolio .
#Run: docker run -p 8080:80 portfolio
