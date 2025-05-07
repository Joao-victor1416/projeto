const express = require('express');
const router = express.Router();
const crud = require('../controllers/cargos');
const autenticarJWT = require('../middlewares/autenticarJWT');

router.get('/usuarios', autenticarJWT, async (req, res) => {
  const usuario = req.usuario;
  console.log('Usuário autenticado:', usuario);
  if (!usuario.cargos || !usuario.cargos.includes('admin')) {
    return res.status(403).json({ autorizado: false });
  }

  try {
    const usuarios = await crud.listarUsuariosComCargos();
    return res.json({ autorizado: true, usuarios });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
