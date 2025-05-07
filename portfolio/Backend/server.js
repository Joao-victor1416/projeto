const express = require('express');
const cors = require('cors');
const cadastroRoute = require('./routes/cadastro');
const loginRoute = require('./routes/login');
const rotaAdmin = require('./routes/admin');

const app = express();

app.use(cors());
app.use(express.static('.'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/cadastro', cadastroRoute);
app.use('/login', loginRoute);
app.use('/admin', rotaAdmin);
app.listen(8000, () => {
  console.log('Servidor rodando na porta 8000...');
});
