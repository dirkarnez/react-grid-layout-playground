"use strict";
const webpack = require("webpack");
const fs = require("fs");
const { type } = require("os");

// Builds example bundles

module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./test/examples/01-basic.js", /*export * as ReactGridLayout from "react-grid-layout";*/
  output: {
    path: __dirname + "/examples",
    filename: "ReactGridLayoutLibrary.js",
    // sourceMapFilename: "[file].map",
    // publicPath: "auto",
    library: {
      name: 'ReactGridLayoutLibrary', // The name of the global variable
      type: 'assign',    // Or 'var'
    }
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript"
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.STATIC_EXAMPLES": JSON.stringify(true)
    })
  ],
  devServer: {
    compress: true,
    port: 4002,
    open: "/react-grid-layout/examples/00-showcase.html",
    hot: true,
    liveReload: true,
    watchFiles: ["test/examples/**/*", "src/**/*"],
    client: {
      overlay: true
    },
    static: {
      directory: ".",
      publicPath: "/react-grid-layout"
    },
    devMiddleware: {
      writeToDisk: true
    }
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: { "react-grid-layout": __dirname + "/index-dev.js" },
    extensionAlias: {
      ".js": [".ts", ".tsx", ".js"],
      ".mjs": [".mts", ".mjs"]
    }
  },
  externals: {
    // When the code does `import 'jquery'` or `require('jquery')`
    // Webpack will expect a global variable named `jQuery` to be present.
    jquery: 'jQuery',
    
    // For Vue, it expects the global variable `Vue`
    react: 'React'
  }
};

// // Load all entry points
// const files = fs
//   .readdirSync(__dirname + "/test/examples")
//   .filter(element => element.match(/^.+\.jsx$/));

// for (const file of files) {
//   const module_name = file.replace(/\.jsx$/, "");
//   module.exports.entry[module_name] = "./test/examples/" + file;
// }
