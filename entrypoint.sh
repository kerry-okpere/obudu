#!/bin/sh

ROOT_DIR=/usr/share/nginx/html

# Replace env vars in JavaScript files
echo "Replacing env constants in JS..."
for file in $ROOT_DIR/js/app.*.js*;
do
  echo "Processing $file ...";

  sed -i 's|VUE_APP_API_URL|'${VUE_APP_API_URL}'|g' $file 
  sed -i 's|VUE_APP_STORENAME|'${VUE_APP_STORENAME}'|g' $file

done

echo "Completed!"
echo "Now Started Nginx..."
nginx -g 'daemon off;'