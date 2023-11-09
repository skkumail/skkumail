FROM ubuntu:jammy-20231004

RUN apt-get update \
	&& apt-get upgrade -y \
	&& apt-get install -y ca-certificates curl gnupg \
	&& mkdir -p /etc/apt/keyrings \
	&& curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key \
		| gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

ENV NODE_MAJOR=20

RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" \
	| tee /etc/apt/sources.list.d/nodesource.list \
	&& apt-get update \
	&& apt-get install nodejs -y

WORKDIR /app
COPY package.json .

RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
