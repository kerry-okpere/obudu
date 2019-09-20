# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -f
COPY ./ /app/
RUN npm run build
# RUN npm run generate

# ENTRYPOINT ["npm", "run build"]
# CMD ["npm", "start" ]

# production stage
FROM nginx:alpine
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
# ENV uri \$uri

#Default config
# ENV PORT 80
# ENV SERVER_NAME _
# ENV ADMIN_EMAIL _
# ENV ADMIN_PASSWORD _
# ENV GRAPHQL_URL _
# ENV DASHBOARD_URI http://demo.mercuriemart.com

# EXPOSE ${PORT}
# CMD ["sh", "-c", "envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
