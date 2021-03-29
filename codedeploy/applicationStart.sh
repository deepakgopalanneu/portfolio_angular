#!/bin/bash
#sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -c file:/home/ubuntu/config.json -s
sudo unzip *.zip

sudo mv /dist/portfolio /var/www/deepakgopalan.me

sudo service nginx restart 
