# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:20
WORKDIR /usr/src/app
RUN npm i
COPY . .
RUN npm run build
RUN npm run start
EXPOSE 3000
CMD ["npm", "start"]