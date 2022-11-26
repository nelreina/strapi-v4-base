FROM nelreina/strapi-base:4.4.3

ENV NODE_ENV=prodcution
ENV REDIS_HOST=172.17.0.1
RUN apt-get install tzdata
ENV TZ America/Curacao
EXPOSE 1337
WORKDIR /app
USER node
COPY --chown=node:node . .
RUN yarn build
CMD ["node", "server.js"]
