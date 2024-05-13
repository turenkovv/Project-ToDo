FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev --force
COPY . .
CMD ["npm", "start"]