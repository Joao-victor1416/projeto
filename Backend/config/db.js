const dotenv = require('dotenv');
dotenv.config({ path: '../.env' }); // Caminho explícito para o arquivo .env

console.log(`DB_PASSWORD:${process.env.DB_PASSWORD}`); // Verifica se a variável foi carregada


// db.js
const { Pool } = require('pg');

// Configurações do banco de dados usando variáveis de ambiente
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Função para executar consultas
const query = (text, params) => {
    return pool.query(text, params);
};

// Exporta a instância do pool e a função de consulta
module.exports = {
    query,
};