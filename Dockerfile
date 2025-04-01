FROM node:22-alpine
WORKDIR /app 
COPY . .
RUN npm install 
EXPOSE 4001
CMD ["node", "index.js"]