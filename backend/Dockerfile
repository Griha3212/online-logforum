FROM node:lts-alpine

# RUN apk add --update \
#     python \
#     python-dev \
#     py-pip \
#     build-base \
#   && pip install virtualenv \
#   && rm -rf /var/cache/apk/*

WORKDIR /app
COPY ./backend/package.json ./
COPY ./backend/package-lock.json ./

RUN npm i

COPY ./backend ./
CMD ["npm", "run", "start"]