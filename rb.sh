#!/bin/bash

sudo docker stop backend
sudo docker rm backend
sudo docker-compose up -d --build backend
