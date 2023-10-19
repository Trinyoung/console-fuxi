const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // // chainWebpack: {
  // //   alias: {
  // //     "@": "./src",
  // //   },
  // // },
  // chainWebpack() {
  //   return {
  //     alias: {
  //       "@": "./src",
  //     },
  //   };
  // },
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:9220",
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
  },
});
