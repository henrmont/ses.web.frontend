FROM nginx
WORKDIR /usr/share/nginx/html
COPY ./dist/modelo.web.frontend .
RUN chmod -R 777 .
