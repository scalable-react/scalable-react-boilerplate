FROM node:4.2.4
RUN npm install -g webpack
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . ./
RUN webpack
ENV NODE_ENV=production
ENV PORT=3000
CMD [ "npm run serve" ]
EXPOSE 3000
