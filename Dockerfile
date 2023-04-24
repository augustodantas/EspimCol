FROM node:16 as espim
RUN npm install -g @angular/cli@9.1.0
RUN mkdir /code
WORKDIR /code
COPY ./ /code/
RUN npm install --legacy-peer-deps
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN ng build --prod

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=espim code/dist/espim-app /usr/share/nginx/html