FROM ubuntu:jammy

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y pkg-config libmysqlclient-dev \
    && apt-get install -y python3 python3-pip python3-dev

WORKDIR /

COPY requirements.txt .

RUN pip3 install --no-cache-dir --upgrade pip
RUN pip3 install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000
RUN python3 init_bert.py
RUN chmod +x entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]