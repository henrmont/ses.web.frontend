FROM nginx:latest
WORKDIR /var/www/html
COPY ./dist/ses.web.frontend .
RUN chmod -R 777 .
