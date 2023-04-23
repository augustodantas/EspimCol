FROM node:16
RUN npm install -g @angular/cli@9.1.0
RUN mkdir /code
WORKDIR /code
COPY ./ /code/
RUN npm install --legacy-peer-deps
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN ng build