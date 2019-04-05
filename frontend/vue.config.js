module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080/api",
        ws: true,
        changeOrigin: true,
        secure: false
      },
      "/example": {
        target: "http://localhost:8080/example",
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
