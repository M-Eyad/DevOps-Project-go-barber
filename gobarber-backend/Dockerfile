FROM node:16.15.0-alpine

WORKDIR /app
COPY package.json .
RUN npm i
COPY ormconfig.json ./ormconfig.json
COPY . .

CMD ["npm", "run", "dev:server"]
