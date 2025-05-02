const express = require('express');
const cors = require('cors');
const cadastroRoute = require('./routes/cadastro');
const loginRoute = require('./routes/login');

const app = express();

app.use(cors());
app.use(express.static('.'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/cadastro', cadastroRoute);
app.use('/login', loginRoute);

app.listen(8000, () => {
  console.log('Servidor rodando na porta 8000...');
});
