criar arquivo .env na raiz do projeto com a seguinte estrutura: 
JWT_SECRET=
BCRYPT_ROUNDS=
DB_NAME=
DB_USER=
DB_HOST=
DB_PASSWORD=
DB_PORT=

criar tabelas com as seguintes estruturas:
CREATE TABLE usuarios (
    id UUID NOT NULL DEFAULT gen_random_uuid(),        -- Identificador único do usuário
    nome VARCHAR(100) NOT NULL,                        -- Nome do usuário
    sobrenome VARCHAR(100) NOT NULL,                   -- Sobrenome do usuário
    email VARCHAR(100) NOT NULL UNIQUE,                -- Email obrigatório e exclusivo
    senha VARCHAR(100) NOT NULL,                       -- Senha do usuário (deve ser armazenada com hash)
    termos BOOLEAN NOT NULL,                           -- Confirmação dos termos de uso
    CONSTRAINT pk_usuarios_id PRIMARY KEY (id)         -- Chave primária na coluna 'id'
);

CREATE TABLE cargos (
    id SERIAL PRIMARY KEY,          -- Identificador automático e único para cada cargo
    nome VARCHAR(50) NOT NULL UNIQUE -- Nome do cargo (ex: 'admin'), sem duplicações
);

CREATE TABLE usuarios_cargos (
    usuario_id UUID NOT NULL,                          -- ID do usuário (referência para a tabela usuarios)
    cargo_id INT NOT NULL,                             -- ID do cargo (referência para a tabela cargos)
    PRIMARY KEY (usuario_id, cargo_id),                -- Evita que o mesmo cargo seja atribuído duas vezes ao mesmo usuário
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (cargo_id) REFERENCES cargos(id) ON DELETE CASCADE
);

feat: Adição de uma nova funcionalidade.
Exemplo: feat: adiciona funcionalidade de login
fix: Correção de um bug.
Exemplo: fix: corrige erro na validação de email
refactor: Alterações no código sem mudar o comportamento (refatoração).
Exemplo: refactor: melhora lógica de autenticação
style: Alterações de formatação ou estilo (sem impacto no código).
Exemplo: style: ajusta espaçamento e indentação
test: Adição ou alteração de testes.
Exemplo: test: adiciona testes para a funcionalidade X
chore: Alterações de manutenção (ex.: atualizações de dependências).
Exemplo: chore: atualiza dependências do projeto
docs: Alterações na documentação.
Exemplo: docs: atualiza README com instruções de instalação