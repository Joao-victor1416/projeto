const JWT = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');
const crud = require('./controllers/crud'); // Importa o módulo do CRUD
const app = express();
const {backCadastro, backLogin} = require('./middlewares/validacaoBack')
const cors = require('cors');


app.use(cors());
app.use(express.static('.')); // Fornece todos os arquivos estáticos da pasta
app.use(express.urlencoded({ extended: true })); // Faz análise dos dados e disponibiliza eles
app.use(express.json()); // Converte o corpo da requisição de JSON para objeto

// Rota para cadastrar um novo usuário
app.post('/cadastro', async (req, res) => {
    const { nome, sobrenome, email, senha, termos} = req.body;
    const validacaoCad = backCadastro(nome, sobrenome, email, senha, termos);
    
    if (validacaoCad === true) {

    try {
        const usuarioExistente = await crud.buscarUsuario(email);
        if (usuarioExistente) {
            return res.status(400).json({ error: "Usuário já cadastrado." });
        }

        console.log(req.body)
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        // Cria um novo usuário usando a função do CRUD
        const novoUsuario = await crud.criarUsuario(nome, sobrenome, email, senhaCriptografada, termos);

        console.log("usuário cadastrado com sucesso:", novoUsuario);

         const token = JWT.sign(
            { id: novoUsuario.id, nome: novoUsuario.nome, sobrenome: novoUsuario.sobrenome, email: novoUsuario.email ,termos: novoUsuario.termos },
            process.env.JWT_SECRET,
            { expiresIn: '15d' }
        );
        
        return res.json({
            success: true,
            token,
            termos: novoUsuario.termos,
            redirectUrl: 'http://localhost:9000/public/pages/igreja.html'
        });
    } catch (error) {
        console.error(`erro ao tentar cadastrar o usuário: ${error}`);
        res.status(500).json({ error: "Erro ao tentar cadastrar o usuário." });
    }
}
});

// Rota para lidar com o login
app.post('/login', async (req, res) => {
    const { emailLogin, senhaLogin } = req.body;
    console.log('Dados recebidos:', req.body)

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
          const token = JWT.sign(
            { id: usuario.id, nome: usuario.nome, sobrenome: usuario.sobrenome, email: usuario.email ,termos: usuario.termos },
            process.env.JWT_SECRET,
            { expiresIn: '15d' }
        );

        console.log( typeof(usuario.termos) , `Login bem-sucedido, token gerado ${usuario.termos}`);
        return res.json({
            success: true,
            token,
            termos: usuario.termos,
            redirectUrl: 'http://localhost:9000/public/pages/igreja.html'
        });
    } catch (error) {
        console.error('Erro ao tentar fazer login:', error);
        res.status(500).json({ error: "Erro ao tentar fazer login." });
    }
}
});

// Inicia o servidor
app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000...');
});
