module.exports = ({ env }) => ({
  // ...
  upload: {
    // Update your cloudinary credentials here
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "db3hc28wh",
        api_key: "373634616236295",
        api_secret: "scTtjfx4o5OoEX9l0NfWYOhdJyE",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...

  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 3,
    },
  },
});
