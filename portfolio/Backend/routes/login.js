const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const crud = require('../controllers/usuario');
const { backLogin } = require('../middlewares/validacaoCad_Log');
const gerarToken = require('../utils/gerartoken');

router.post('/', async (req, res) => {
  const { emailLogin, senhaLogin } = req.body;

  const validacaoLog = backLogin(emailLogin, senhaLogin);
  if (validacaoLog === true) {
    try {
      const usuario = await crud.buscarUsuario(emailLogin);
      if (!usuario) {
        return res.status(400).json({ error: "Usuário não encontrado." });
      }

      const senhaCorreta = await bcrypt.compare(senhaLogin, usuario.senha);
      if (!senhaCorreta) {
        return res.status(400).json({ error: "Senha incorreta." });
      }

      const token = await gerarToken(usuario);
      return res.json({
        success: true,
        token,
        termos: usuario.termos,
        redirectUrl: 'http://localhost:9000/public/pages/igreja.html'
      });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      res.status(500).json({ error: "Erro ao tentar fazer login." });
    }
  }
});

module.exports = router;
