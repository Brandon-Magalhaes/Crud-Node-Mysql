# CRUD de Usuários — Node.js, Express e MySQL

Cadastro de usuários com API REST em **Node.js/Express** e **MySQL**, consumido por uma interface em **React**.

Projeto de estudo de CRUD completo: listar, criar, editar e excluir registros, com validação de formulário e feedback por notificação no front-end.

## Estrutura

```
Crud-Node-Mysql/
├─ api/                 back-end Express
│  ├─ index.js          servidor na porta 8800
│  ├─ db.js             conexão MySQL
│  ├─ routes/           rotas /users
│  └─ controlers/       consultas SQL (listar, criar, editar, excluir)
└─ frontend/            interface React (Create React App)
   └─ src/
      ├─ App.js         estado da lista e chamadas axios
      └─ components/    Form (cadastro/edição) e Grid (tabela)
```

## Como rodar

### 1. Banco de dados

Crie um banco chamado `crud` e a tabela de usuários:

```sql
CREATE DATABASE crud;

USE crud;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  fone VARCHAR(20),
  data_nascimento DATE
);
```

A conexão fica em `api/db.js`. Os valores atuais (`localhost`, `root`, `admin`, `crud`) são padrões locais de desenvolvimento: ajuste para o seu ambiente antes de rodar. Senha não deve ficar no código em um projeto real — o certo é ler de variável de ambiente.

### 2. Back-end

```bash
npm install
npm start        # nodemon api/index.js na porta 8800
```

### 3. Front-end

```bash
cd frontend
npm install
npm start        # http://localhost:3000
```

## Endpoints

| Método | Rota | Ação |
|---|---|---|
| GET | `/` | lista usuários |
| POST | `/` | cria usuário (`nome`, `email`, `fone`, `data_nascimento`) |
| PUT | `/:id` | atualiza usuário |
| DELETE | `/:id` | remove usuário |

## Stack

Node.js · Express · MySQL · React · axios · styled-components · react-toastify

## Limitações

Projeto de estudo, sem autenticação, paginação ou testes automatizados. As consultas usam a biblioteca `mysql` com placeholders `?`, que fazem o escape dos valores.
