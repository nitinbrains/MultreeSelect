const path = require('path');
var nodeExternals = require('webpack-node-externals');


module.exports = {
  devtool:  false,
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    {
      test: /\.svg$/,
      use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "react-svg-loader",
          options: {
            jsx: true // true outputs JSX tags
          }
        }
      ]
  },
    ],
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
  },
  target: 'node', // in order to ignore builtin modules like path, fs, etc. 
   // externals: [nodeExternals()],
  externals :[
    {
    react: {
           commonjs: "react",  
           commonjs2: "react",
           amd: "React",
           root: "React"
         },
         "react-dom": {
          commonjs: "react-dom",
          commonjs2: "react-dom",
          amd: "ReactDOM",
          root: "ReactDOM"
        }
        },
        nodeExternals()
  ]
};
