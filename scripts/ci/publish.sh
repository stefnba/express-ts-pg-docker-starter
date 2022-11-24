#!/bin/bash

##
# Start up the new production containers on the remote server
##

docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml up -d --build --remove-orphans

docker ps
