#!/bin/bash

##
# Start up the new production containers on the remote server
# Executed on remote server
##

docker compose -f docker/docker-compose.yml -f docker/docker-compose.prod.yml -f docker/docker-compose.deploy.yml --project-directory . down

docker compose -f docker/docker-compose.yml -f docker/docker-compose.prod.yml -f docker/docker-compose.deploy.yml --project-directory . pull

docker compose -f docker/docker-compose.yml -f docker/docker-compose.prod.yml -f docker/docker-compose.deploy.yml --project-directory . up -d --build --remove-orphans

docker ps