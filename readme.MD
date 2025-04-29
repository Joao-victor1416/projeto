criar arquivo .env na raiz do projeto com a seguinte estrutura: 
JWT_SECRET=
BCRYPT_ROUNDS=
DB_NAME=
DB_USER=
DB_HOST=
DB_PASSWORD=
DB_PORT=

criar tabela com a seguinte estrutura:
CREATE TABLE usuarios (
    guid UUID NOT NULL DEFAULT gen_random_uuid(),
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(100) NOT NULL,
    termos BOOLEAN NOT NULL,
    CONSTRAINT pk_usuarios_id PRIMARY KEY (guid)
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