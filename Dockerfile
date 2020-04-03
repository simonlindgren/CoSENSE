FROM node:13.12-alpine as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build/ .
