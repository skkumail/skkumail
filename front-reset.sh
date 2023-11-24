#!/bin/bash

sudo docker-compose down frontend
sudo docker-compose frontend up -d --build
