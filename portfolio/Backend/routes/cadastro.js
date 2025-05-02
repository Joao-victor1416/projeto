const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const crud = require('../controllers/crud');
const { backCadastro } = require('../middlewares/validacaoCad_Log');
const gerarToken = require('../utils/gerartoken');

router.post('/', async (req, res) => {
  const { nome, sobrenome, email, senha, termos } = req.body;
  const validacaoCad = backCadastro(nome, sobrenome, email, senha, termos);

  if (validacaoCad === true) {
    try {
      const usuarioExistente = await crud.buscarUsuario(email);
      if (usuarioExistente) {
        return res.status(400).json({ error: "Usuário já cadastrado." });
      }

      const senhaCriptografada = await bcrypt.hash(senha, 10);
      const novoUsuario = await crud.criarUsuario(nome, sobrenome, email, senhaCriptografada, termos);

      const token = gerarToken(novoUsuario);
      return res.json({
        success: true,
        token,
        termos: novoUsuario.termos,
        redirectUrl: 'http://localhost:9000/public/pages/igreja.html'
      });
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      res.status(500).json({ error: "Erro ao tentar cadastrar o usuário." });
    }
  }
});

module.exports = router;
