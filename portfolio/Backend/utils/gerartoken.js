const JWT = require('jsonwebtoken');

module.exports = function gerarToken(usuario) {
  return JWT.sign(
    {
      id: usuario.id,
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      email: usuario.email,
      termos: usuario.termos
    },
    process.env.JWT_SECRET,
    { expiresIn: '15d' }
  );
}
