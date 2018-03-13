const path = require("path");

const sharedConfig = {
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
    // If you update aliases, don't forget to also
    // update the path member of tsconfig.json.
    alias: {
      frontend: path.join(__dirname, "src", "frontend"),
      backend: path.join(__dirname, "src", "backend"),
      common: path.join(__dirname, "src", "common")
    }
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      }
    ]
  }
};

module.exports = [
  Object.assign({}, sharedConfig, {
    entry: ["core-js", "./src/frontend/index.ts"],

    output: {
      filename: "frontend.js",
      path: path.resolve(__dirname, "__build")
    }
  }),

  Object.assign({}, sharedConfig, {
    entry: ["core-js", "./src/backend/index.ts"],

    output: {
      filename: "backend.js",
      path: path.resolve(__dirname, "__build")
    }
  })
];
