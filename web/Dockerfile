ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-alpine
WORKDIR /usr/src/app
COPY . .
EXPOSE 5000-5009
RUN npm i
CMD ["node", "."]

# multiple port list
# EXPOSE 5001
# EXPOSE 5002
