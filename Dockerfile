FROM node:17.5.0-alpine

COPY . .

WORKDIR .

EXPOSE 8003


RUN yarn install
RUN yarn build


CMD yarn start -p 8003
