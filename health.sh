#!/bin/bash

sudo docker-compose exec -T frontend curl -X GET http://backend:8000/health

