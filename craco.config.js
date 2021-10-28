const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@roots": path.resolve(__dirname, "src/roots/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@contexts": path.resolve(__dirname, "src/contexts/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@services": path.resolve(__dirname, "src/services/"),
      "@api": path.resolve(__dirname, "src/api/"),
      "@animations": path.resolve(__dirname, "src/animations/"),
    },
  },
};
