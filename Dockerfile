FROM node:4.2.4
RUN npm install -g webpack
WORKDIR /app
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app
COPY . ./app
RUN webpack
ENV NODE_ENV=production
ENV PORT=3000
CMD [ "npm run serve" ]
EXPOSE 3000
