#!/bin/bash

sudo mv dist /var/www

sudo service nginx restart 

cd ~/server
sudo npm install
sudo nohup npm run start > /dev/null 2> /dev/null < /dev/null &