#!/bin/bash

#sudo docker stop doc
sudo docker stop web 
#sudo docker rm doc 
sudo docker rm web 
#sudo make build service=doc
sudo make build service=web
#sudo make up service=doc
sudo make up service=web

sudo make logs service=web
