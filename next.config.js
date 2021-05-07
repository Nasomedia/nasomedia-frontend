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
        source: "/auth/login",
        destination: "/",
        // has: [
        //   {
        //     type: "cookie",
        //     key: "token",
        //   },
        // ],
        permanent: false,
      },
      {
        source: "/auth/signup",
        destination: "/",
        // has: [
        //   {
        //     type: "cookie",
        //     key: "token",
        //   },
        // ],
        permanent: false,
      },
    ];
  },
});
