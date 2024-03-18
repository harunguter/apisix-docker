ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-alpine
WORKDIR /app
COPY . .
EXPOSE 5000-5003
ENV NODE_ENV="production"
RUN npm install --production
CMD ["npm", "start"]