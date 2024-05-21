FROM node:20-alpine as builder
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx
COPY --from=builder /app/nginx /etc/nginx/conf.d
EXPOSE 80 
COPY --from=builder /app/out /usr/share/nginx/html