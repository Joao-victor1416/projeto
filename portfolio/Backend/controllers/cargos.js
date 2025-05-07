/**
 * Retorna todos os usuários com seus respectivos cargos (em um array).
 */const db = require('../config/db'); // ajuste o caminho se necessário

async function buscarCargosDoUsuario(usuarioId) {
    const result = await db.query(
      `
      SELECT ARRAY_AGG(c.nome) AS cargos
      FROM usuarios_cargos uc
      JOIN cargos c ON uc.cargo_id = c.id
      WHERE uc.usuario_id = $1
      `,
      [usuarioId]
    );
  
    return result.rows[0]?.cargos || [];
  }
  


async function listarUsuariosComCargos() {
    const result = await db.query(`
        SELECT 
            u.id, u.nome, u.sobrenome, u.email, 
            ARRAY_AGG(c.nome) AS cargos
        FROM usuarios u
        LEFT JOIN usuarios_cargos uc ON u.id = uc.usuario_id
        LEFT JOIN cargos c ON uc.cargo_id = c.id
        GROUP BY u.id
        ORDER BY u.nome
    `);
    return result.rows;
}

/**
 * Adiciona um cargo específico a um usuário, sem duplicar caso já exista.
 */
async function adicionarCargoAoUsuario(usuarioId, cargoId) {
    await db.query(`
        INSERT INTO usuarios_cargos (usuario_id, cargo_id)
        VALUES ($1, $2)
        ON CONFLICT DO NOTHING
    `, [usuarioId, cargoId]);
}

/**
 * Remove um cargo específico de um usuário.
 */
async function removerCargoDoUsuario(usuarioId, cargoId) {
    await db.query(`
        DELETE FROM usuarios_cargos
        WHERE usuario_id = $1 AND cargo_id = $2
    `, [usuarioId, cargoId]);
}

/**
 * Atualiza todos os cargos de um usuário:
 * 1. Remove todos os cargos atuais
 * 2. Adiciona os novos cargos fornecidos
 */
async function atualizarCargosDoUsuario(usuarioId, novosCargosIds) {
    // 1. Remove todos os cargos atuais do usuário
    await db.query(`
        DELETE FROM usuarios_cargos WHERE usuario_id = $1
    `, [usuarioId]);

    // 2. Adiciona os novos cargos um por um
    for (const cargoId of novosCargosIds) {
        await db.query(`
            INSERT INTO usuarios_cargos (usuario_id, cargo_id)
            VALUES ($1, $2)
        `, [usuarioId, cargoId]);
    }
}

module.exports = {
    buscarCargosDoUsuario,
    listarUsuariosComCargos,
    adicionarCargoAoUsuario,
    removerCargoDoUsuario,
    atualizarCargosDoUsuario,
};
