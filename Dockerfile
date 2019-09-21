FROM nginx:alpine

# Install npm and node
RUN apk add --update npm

# Add bash
RUN apk add --no-cache bash

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

# # Make our shell script executable
RUN chmod +x start.sh


CMD ["/bin/bash", "-c", "/app/start.sh && nginx -g 'daemon off;'"]
