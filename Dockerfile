FROM node:latest

ARG BACKEND_URL
WORKDIR /app
COPY . /app

ENV PORT 3000
ENV INLINE_RUNTIME_CHUNK=false
ENV REACT_APP_ROOT_API=${BACKEND_URL}
EXPOSE 3000/tcp

ENV NODE_OPTIONS=--max_old_space_size=8192
RUN npm install
RUN npm run build
RUN npm install -g serve


CMD serve -s build
