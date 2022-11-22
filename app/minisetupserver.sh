#!/usr/bin/env bash

echo "
----------------------
  PM2
----------------------
"

# install pm2 with npm
sudo npm install -g pm2

# set pm2 to start automatically on system startup
sudo pm2 startup systemd


npm install

cd /opt/A-Cup-Of-Java/client
npm install
