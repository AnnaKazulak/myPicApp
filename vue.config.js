module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
						@import "@/styles/variables.scss";
					`,
      },
    },
  },
};
