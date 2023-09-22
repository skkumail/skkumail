FROM rockylinux/rockylinux:9.2

RUN dnf update -y && \
    dnf install --allowerasing -y ca-certificates curl gpg jq git vim tmux gcc-c++ make && \
    curl -sL https://rpm.nodesource.com/setup_20.x | bash - && \
    dnf install -y nodejs

WORKDIR /app
COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]


