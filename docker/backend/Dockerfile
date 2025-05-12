# Utilisez l'image officielle Node.js avec la tag alpine pour une image plus légère
FROM node:20-alpine3.17

RUN apk add --no-cache openssl

# Définissez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez les fichiers de package.json et package-lock.json
COPY ./api-ecovillage/package*.json .

# Installez les dépendances du projet
RUN npm install

# Copiez tous les fichiers du projet dans le conteneur
COPY ./api-ecovillage .

# Exposez le port sur lequel votre app tourne
EXPOSE 3000

# Lancez l'application
CMD ["npm", "run", "start:dev"]
