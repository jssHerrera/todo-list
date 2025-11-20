FROM node:24-alpine3.22
RUN npm install -g pnpm
WORKDIR /app

ENV CI=true

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

COPY . .
EXPOSE 3000

CMD ["pnpm", "dev"]