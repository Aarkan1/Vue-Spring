module.exports = {
  devServer: {
    proxy: {
      "/api/posts": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
        secure: false
      },
      "/api/posts/:id": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
        secure: false
      },
      "/api/users": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
        secure: false
      },
      "/api/users/:id": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
        secure: false
      }
    }
  },
  baseUrl: "",
  outputDir: "../src/main/resources/static"
};
