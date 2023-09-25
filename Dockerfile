FROM nginx
WORKDIR /usr/share/nginx/html
COPY ./dist/ses.web.frontend .
RUN chmod -R 777 .
