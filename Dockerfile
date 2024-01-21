FROM node:20.7.0

WORKDIR /usr/src/app

COPY package.json .

RUN npm install -g serve

COPY ./ ./

RUN npm run build

ENTRYPOINT ["serve", "-s", "build"]
