#!/bin/bash

./node_modules/.bin/ember build --environment production
rsync -av dist/* /var/www/amba.masterpro.site/open-pool/www
