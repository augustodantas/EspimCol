FROM node:14
RUN npm install -g @angular/cli@9.1.0
RUN npm install
RUN ng build
RUN ng serve