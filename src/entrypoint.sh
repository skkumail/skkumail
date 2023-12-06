#!/bin/bash

if [ -z "$WORKERS" ]; then
  CORES=$(grep -c ^processor /proc/cpuinfo)
  WORKERS=$(( 2 * CORES + 1 ))
fi

python3 manage.py makemigrations
python3 manage.py migrate
# b, w, k, t
exec gunicorn \
  --worker-class uvicorn.workers.UvicornWorker \
  --workers ${WORKERS} \
  --bind 0.0.0.0:8000 \
  --timeout 3600 \
  mailai.asgi:application
