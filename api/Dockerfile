FROM node:16

# Directorio de trabajo
WORKDIR /usr/src/app

# Instalando dependencias
COPY package*.json ./
RUN npm install

# Copiando aplicacion en la imagen
COPY . .

CMD [ "node", "server.js" ]