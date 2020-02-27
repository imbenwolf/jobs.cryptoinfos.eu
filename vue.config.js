module.exports = {
  devServer: {
    proxy: {
      "/adview": {
        target: "https://adview.online/api/v1/jobs.json",
        pathRewrite: { "^/adview": "" },
        changeOrigin: true
      }
    }
  }
};
