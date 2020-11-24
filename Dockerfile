FROM node:latest


WORKDIR /app
COPY . /app

ENV PORT 3000
EXPOSE 3000/tcp

ENV NODE_OPTIONS=--max_old_space_size=8192
RUN npm install
RUN npm run build
RUN npm install -g serve


CMD serve -s build
