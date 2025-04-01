FROM node:20-airplane
WORKDIR /app 
COPY . .
RUN npm install 
EXPOSE 4000
CMD ["npm","run","server"]