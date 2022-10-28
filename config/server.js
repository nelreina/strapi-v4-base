module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT"),
  app: {
    keys: env.array("APP_KEYS"),
  },
   localazy: {
    enabled: true,
    resolve: "./src/plugins/localazy",
    config: {
      default: () => {},
      validator: () => {},
    },
  },
});
