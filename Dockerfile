
FROM node:10-slim

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm ci \
 && npm cache clean --force \
 && npm i

COPY . ./

# ENV PORT 8080

EXPOSE 8080

CMD ["node", "./server.js"]
