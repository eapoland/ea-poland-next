const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  distDir: "out",
  i18n,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  images: {
    domains: ["ea-poland-wordpress.azurewebsites.net"],
  },
};
