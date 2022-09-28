FROM node:14.18.1
WORKDIR /app

RUN npm install express --registry=https://registry.npm.taobao.org

COPY . /app

EXPOSE 8080

CMD node server.js