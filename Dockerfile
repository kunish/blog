FROM node:14

WORKDIR /srv

COPY . .

EXPOSE 80

RUN yarn
RUN yarn build

CMD [ "yarn", "serve" ]