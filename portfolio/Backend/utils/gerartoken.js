const JWT = require('jsonwebtoken');

const buscarCargosDoUsuario = require('../controllers/cargos').buscarCargosDoUsuario;

module.exports = async function gerarToken(usuario) {
  const cargos = await buscarCargosDoUsuario(usuario.id); // Espera os cargos do banco

  return JWT.sign(
    {
      id: usuario.id,
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      email: usuario.email,
      termos: usuario.termos,
      cargos: cargos, // Agora é um array com os nomes dos cargos
    },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
};
