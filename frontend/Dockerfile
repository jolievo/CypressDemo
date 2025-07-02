FROM node:18-alpine
WORKDIR /app
COPY index.html .
RUN npm install -g serve
CMD ["serve", ".", "-l", "3000"]
