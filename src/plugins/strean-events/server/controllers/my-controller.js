'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strean-events')
      .service('myService')
      .getWelcomeMessage();
  },
});
