FROM node:lts-alpine as build-stage
# install python
RUN apk add --update \
    python \
    python-dev \
    py-pip \
    build-base \
&& pip install virtualenv \
&& rm -rf /var/cache/apk/*
WORKDIR /app
COPY package*.json ./
RUN yarn global add @gridsome/cli
RUN yarn
COPY . .
RUN rm -rf node_modules/sharp/vendor
RUN yarn
RUN yarn run build
# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
