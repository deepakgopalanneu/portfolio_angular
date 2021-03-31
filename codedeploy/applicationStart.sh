#!/bin/bash

sudo mv ~/server.conf /etc/nginx/conf.d/

cd /var/www
sudo mv ~/dist .

sudo service nginx restart 

cd ~/server
sudo npm install
sudo nohup npm run start > /dev/null 2> /dev/null < /dev/null &