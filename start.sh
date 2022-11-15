#1/bin/bash
pm2 delete all
cd /opt/A-Cup-Of-Java/app/Server
pm2 start ecosystem.config.js
cd /opt/A-Cup-Of-Java/client
npm run build
pm2 start npm --name frontend -- start
pm2 monit