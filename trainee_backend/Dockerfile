FROM node:12-alpine

WORKDIR /backend
COPY package.json .
RUN npm install
COPY . .

EXPOSE 5000

ENTRYPOINT node index.js