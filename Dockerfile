FROM node:alpine 
MAINTAINER diegotony
COPY . /app
WORKDIR ./app
RUN npm config set registry http://registry.npmjs.org &&  \
    npm install 
ENV PORT=3037
EXPOSE 3037
CMD ["npm","run","start"]
