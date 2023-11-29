#!/bin/bash

sudo make build service=web

sudo docker stop web 
sudo docker rm web 
sudo make up service=web

sudo make logs service=web
