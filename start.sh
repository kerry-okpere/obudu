#!/bin/bash

if [ ! -d "/app/dist" ] 
then
    npm run build

    echo "Build finished...";

    echo "CD INTO DIST DIRECTORY...";

    cd /app/dist/

    echo "START COPY";

    cp -rf . /usr/share/nginx/html/

    echo "END COPY";
fi
