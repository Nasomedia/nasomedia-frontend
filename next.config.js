const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    register: true,
    sw: "service-worker.js",
    runtimeCaching,
  },
  async redirects() {
    return [
      {
        source: "/auth/:slug*",
        destination: "/",
        has: [
          {
            type: "cookie",
            key: "authorized",
            value: "true"
          },
        ],
        permanent: false,
      },
      {
        source: "/payment/:slug*",
        destination: "/",
        has: [
          {
            type: "cookie",
            key: "authorized",
            value: "false"
          },
        ],
        permanent: false,
      },
    ];
  },
});
