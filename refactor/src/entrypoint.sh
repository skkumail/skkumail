#!/bin/bash

if [ -z "$WORKERS" ]; then
  CORES=$(grep -c ^processor /proc/cpuinfo)
  WORKERS=$(( 2 * CORES + 1 ))
fi

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py collectstatic
# b, w, k, t
exec gunicorn \
  --bind 0.0.0.0:8000 \
  --workers ${WORKERS} \
  --worker-class uvicorn.workers.UvicornWorker \
  --timeout 3600 \
  mailai.asgi:application
