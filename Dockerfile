FROM node:20.7.0

COPY package.json .

RUN npm install -g serve

COPY . /app

RUN /app

RUN npm run build

ENTRYPOINT ["serve", "-s", "build"]
