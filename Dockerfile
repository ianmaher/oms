# Build: docker build -t ianmaher/node .
# start mongdb
# docker run -d --name oms-mongodb  mongo
# start node and link MongoDB container
# docker run -d -p 3000:3000 --link oms-mongodb:oms-mongodb ianmaher/node


FROM node:latest
MAINTAINER Ian Maher
ENV NODE_ENV=development
ENV PORT=3000  
COPY . /var/www
WORKDIR /var/www
RUN npm install

# at runtime, link this to the docker host
# VOLUME ["/var/www"]

EXPOSE $PORT

ENTRYPOINT ["npm","start"]

