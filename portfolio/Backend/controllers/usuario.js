// crud.js
const db = require('../config/db');

// Função para criar (C) - Adicionar novo usuário
async function criarUsuario(nome, sobrenome, email, senhaCriptografada, termos) {
    const result = await db.query(
        'INSERT INTO usuarios (nome, sobrenome, email, senha, termos) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [nome, sobrenome, email, senhaCriptografada, termos]
    );
    
    return result.rows[0];
}

// Função para ler (R) - Buscar todos os usuários
async function listarUsuarios() {
    const result = await db.query('SELECT * FROM usuarios');
    return result.rows;
}

// Função para buscar um único usuário por email
async function buscarUsuario(emailLogin) {
    const result = await db.query('SELECT * FROM usuarios WHERE email = $1', [emailLogin]);
    return result.rows[0];
}

// Função para atualizar (U) - Editar um usuário existente
async function atualizarUsuario(email, novosDados) {
    const { nome, sobrenome, senha } = novosDados;
    const result = await db.query(
        'UPDATE usuarios SET nome = COALESCE($1, nome), sobrenome = COALESCE($2, sobrenome), senha = COALESCE($3, senha) WHERE email = $4 RETURNING *',
        [nome, sobrenome, senha, email]
    );
    return result.rows[0];
}

// Função para deletar (D) - Remover um usuário
async function deletarUsuario(email) {
    const result = await db.query('DELETE FROM usuarios WHERE email = $1 RETURNING *', [email]);
    return result.rows[0];
}

// Exporta as funções para serem usadas em outros arquivos
module.exports = {
    criarUsuario,
    listarUsuarios,
    buscarUsuario,
    atualizarUsuario,
    deletarUsuario,
};