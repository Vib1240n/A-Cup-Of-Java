FROM node:20.5.1 as build
WORKDIR /client
COPY ./client ./client
RUN cd client && npm install && npm run build

FROM node:20.5.1 as server
WORKDIR /app
COPY ./Server ./server
RUN cd server && npm install


# Path: Dockerfile
# Compare this snippet from server/dockerfile.backend:
# # Build server
# FROM node:18.11.0
#
# # Working directory be app
# WORKDIR /app

