const path = require("path")
const HtmlwebpackPlugin = require("html-webpack-plugin")//minificar html e referenciar um arquivo base
const MiniCssExtractPlugin = require("mini-css-extract-plugin")//plugin par extrair css e crias arquivo de estilo
const TerserPlugin = require("terser-webpack-plugin")//minimizarJS
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")//otimiza para css tudo em uma so linha

module.exports = {
  entry: "./public/index.js",

  output: {
    filename: "public/script.js",
    path: path.resolve("build"),
  },

  mode: "development",

    performance: {
      hints: false
    },

  devServer:{
    static:{ 
        directory: path.resolve(__dirname,"build")
    },
    // client: {
    //   logging: 'none'
    // },
    port:9000,
    open: true,
    liveReload: true
  
},

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        }
      }),
      new CssMinimizerWebpackPlugin({})
    ]
  },

  module: {

    rules: [
      {
        test: /\.s?[ac]ss$/, // . : arquivo com.| ?:opcional |[]:pode variar emtre letras ac | terminado com css
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use:{
          loader: 'file-loader',
          options:{
            name:'[name].[ext]',
            outputPath: 'public/assets/',
        }

        },
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
        filename:'public/css/styles.css',
    }),
    new HtmlwebpackPlugin({
        filename:'index.html',
        template:'./public/html/index.html',
        inject:'body',
        scriptloading:'defer',
        externalScript:['./build/API/api.js'],
    }),
    new HtmlwebpackPlugin({
      filename:'public/pages/igreja.html',
      template:'./public/html/igreja.html',
      chunks: ["main"],
    }),
    // new HtmlwebpackPlugin({
    //   filename:'formRegistro.html',
    //   template:'./src/html/formRegistro.html'
    // })
    ]


}
