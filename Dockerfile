FROM node:16

WORKDIR /srv

COPY . .

EXPOSE 80

RUN npm ci
RUN npm run build

CMD [ "npm", "run", "serve" ]