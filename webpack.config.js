var path = require("path");

module.exports = {
  // Change to your "entry-point".
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
    publicPath: '/dist/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css"]
  },
  module: {
    rules: [
      {
        // Include ts file
        test: /\.(j|t)s$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ]
  },
  mode: "development",
  devServer: {
    inline: true,
  },
  devtool: 'inline-source-map',
};
