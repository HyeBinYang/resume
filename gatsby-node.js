// exports.createPages = async ({ getConfig, actions }) => {
// const { createPage } = actions;
// createPage({
//   path: "/using-dsg",
//   component: require.resolve("./src/templates/using-dsg.js"),
//   context: {},
//   defer: true,
// });

// };
const path = require("path");

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        utils: path.resolve(__dirname, "src/utils"),
        hooks: path.resolve(__dirname, "src/hooks"),
      },
    },
  });
};
