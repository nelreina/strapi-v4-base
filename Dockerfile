FROM nelreina/strapi-base:4.4.3

ENV NODE_ENV=prodcution
ENV REDIS_HOST=172.17.0.1

EXPOSE 1337
WORKDIR /app
USER node
COPY --chown=node:node . .
RUN yarn build
CMD ["node", "server.js"]
