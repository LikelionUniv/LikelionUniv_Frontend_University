FROM node:20.7.0

RUN npm install -g serve

RUN CI='false' npm run build

RUN mkdir ./build

COPY ./build ./build

ENTRYPOINT ["serve", "-s", "build"]
