FROM node:16
EXPOSE 4200
RUN npm install -g @angular/cli@9.1.0
RUN mkdir /code
WORKDIR /code
COPY ./ /code/
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN ng build
RUN ng serve --port 80