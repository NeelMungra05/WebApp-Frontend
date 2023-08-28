#! bin/bash

if [-d "/var/www/non_prod_react"]; then
    echo "Removing old application from /var/www/non_prod_react folder..."
    sudo rm -rf /var/www/non_prod_react
else
    echo "/var/www/non_prod_react folder not found"
if