#!/bin/sh
(cd /root/palworld-server-docker;
docker compose pull;
docker compose up --force-recreate --build -d;
docker image prune -f;)
