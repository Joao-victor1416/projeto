const jwt = require('jsonwebtoken');

function autenticarJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  const token = authHeader.split(' ')[1]; // Espera formato: "Bearer <token>"

  jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido ou expirado.' });
    }

    // Armazena os dados do usuário decodificados no objeto da requisição
    req.usuario = usuario;
    next();
  });
}

module.exports = autenticarJWT;
