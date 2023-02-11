FROM node:18.14-alpine
WORKDIR /opt/app
ADD *.json ./
RUN npm install
ADD . .
CMD ["npm", "start"]

