FROM node:lts-alpine

WORKDIR /app

RUN apk update && apk upgrade && apk add --no-cache git 

COPY ./frontend/package.json ./frontend/package-lock.json ./

RUN npm ci

RUN npm install -g serve

COPY ./frontend ./
CMD ["npm", "run", "start"]