# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run generate

# production stage
FROM nginx:stable as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/dist /var/www

RUN chmod 755 /var/www/

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf.template

ENV uri \$uri

#Default config
ENV PORT 80
ENV SERVER_NAME _
#ENV DASHBOARD_URI http://demo.mercuriemart.com

# EXPOSE ${PORT}
CMD ["sh", "-c", "envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
