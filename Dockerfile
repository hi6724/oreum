# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:18
WORKDIR /usr/src/app
COPY . .
RUN npm i
RUN npm run build
RUN npm run start
EXPOSE 3000
CMD ["npm", "start"]