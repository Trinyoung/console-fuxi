const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // chainWebpack: {
  //   alias: {
  //     "@": "./src",
  //   },
  // },
  chainWebpack() {
    return {
      alias: {
        "@": "./src",
      },
    };
  },
});
