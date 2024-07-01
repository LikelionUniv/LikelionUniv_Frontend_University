FROM node:20.7.0
  
WORKDIR /app
  
COPY . .
  
RUN npm install
  
RUN npm install -g serve
  
RUN CI='false' npm run build
  
ENTRYPOINT ["serve", "-s", "build"]