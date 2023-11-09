#!/bin/bash

export BACKEND_HOST=localhost
export BACKEND_PORT=8000
export FRONTEND_HOST=localhost
export FRONTEND_PORT=3000

function docker_actions() {
  case $1 in
    build)
      docker-compose build
      ;;
    up)
      docker-compose up -d
      ;;
    run)
      docker-compose build && docker-compose up -d
      ;;
    down)
      docker-compose down
      ;;
    delete)
      docker images -q | xargs docker rmi
      ;;
    *)
      echo "Usage: $0 {build|up|run|down|delete}"
      exit 1
      ;;
  esac
}

function start_dev() {
  cd ./frontend && npm run dev &
  cd ./backend && python3 manage.py runserver &
}

function start_prod() {
  case $1 in
    build|run|up|down)
      docker_actions "$1"
      ;;
    *)
      echo "Invalid argument for prod environment. Use build, run, up, or down."
      exit 1
      ;;
  esac
}

# Main execution
if [ "$1" = "dev" ]; then
  start_dev
elif [ "$1" = "prod" ]; then
  start_prod "$2"
else
  echo "Usage: $0 {dev|prod build|prod run|prod up|prod down}"
  exit 1
fi
