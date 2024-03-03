const path = require(`path`);

module.exports = {
  eslint: {
    enable: false,
  },
  webpack: {
    alias: {
      "@core": path.resolve(__dirname, "src/core"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
      "@theme": path.resolve(__dirname, "src/theme"),
    },
  },
};
