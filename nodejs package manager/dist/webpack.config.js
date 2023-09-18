// console.log("__dirname", _dirname);
// console.log("path.resolve()", path.resolve());
// console.log(
//   `path.resolve(__dirname,
// 'dist')`,
//   path.resolve(__dirname, "dist")
// );
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
