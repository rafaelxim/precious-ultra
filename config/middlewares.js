const isProduction = process.env.NODE_ENV === "production";

module.exports = [
  "strapi::logger",
  "strapi::errors",
  isProduction
    ? {
        name: "strapi::security",
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              "connect-src": ["'self'", "https:"],
              "img-src": [
                "'self'",
                "data:",
                "blob:",
                "dl.airtable.com",
                "my-strapi-bucket-77.s3.us-east-1.amazonaws.com",
              ],
              "media-src": [
                "'self'",
                "data:",
                "blob:",
                "dl.airtable.com",
                "my-strapi-bucket-77.s3.us-east-1.amazonaws.com",
              ],
              upgradeInsecureRequests: null,
            },
          },
        },
      }
    : "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  { resolve: "../src/middlewares/admin-redirect.js" },
];
