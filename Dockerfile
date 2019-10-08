FROM node:alpine
WORKDIR /usr/app/front
EXPOSE 3000 5672
COPY ./ ./
RUN npm install
CMD ["npm", "start"]