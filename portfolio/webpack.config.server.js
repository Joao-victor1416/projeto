const path = require('path');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './Backend/server.js', // Arquivo de entrada (o seu server.js)
  target: 'node', // Define o ambiente alvo como Node.js
  externals: [nodeExternals()], // Exclui módulos de node_modules da saída do bundle
  output: {
    filename: 'Backend/server.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'build'), // Diretório de saída (build/server.js)
    //clean: true,
  },
  mode: 'production', // Você pode mudar para 'production' em produção
  module: {
    rules: [
      {
        test: /\.js$/, // Aplica a regra a arquivos .js
        exclude: /node_modules/, // Ignora node_modules
        use: {
          loader: 'babel-loader', // Usa Babel para transpilar o código JS moderno
          options: {
            presets: ['@babel/preset-env'], // Preset do Babel para Node.js moderno
          },
        },
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '../.env'), // Caminho explícito para o arquivo .env
    }),
  ],
};
