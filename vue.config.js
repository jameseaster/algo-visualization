module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/algo-visualization/" : "/",
  transpileDependencies: ["vuetify"],
};
