module.exports = {
  devServer: {
    proxy: {
      "/posts": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
        secure: false
      },
      "/post": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
        secure: false
      },
      "/post/:id": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
        secure: false
      }
    }
  },
  baseUrl: "",
  outputDir: "../src/main/resources/static"
  // publicPath: '',
  // assetsDir: undefined,
  // runtimeCompiler: undefined,
  // productionSourceMap: undefined,
  // parallel: undefined,
  // css: undefined
};
