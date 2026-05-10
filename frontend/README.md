# 🔐 Fullstack Admin & Login System (React + Node.js)

Um sistema completo de autenticação e painel administrativo (Fullstack). O projeto possui um front-end moderno em React que se comunica com uma API RESTful construída em Node.js, utilizando banco de dados estruturado (SQLite) e criptografia real de senhas, simulando o ambiente de produção de uma aplicação web segura.

## ✨ Funcionalidades

* **Autenticação Real de Usuários:** Validação de credenciais (e-mail e senha) através de requisições HTTP (`POST /api/login`).
* **Cadastro de Novos Usuários:** Criação de novos usuários com requisição ao servidor (`POST /api/register`), garantindo que não existam e-mails duplicados.
* **Gestão de Usuários (Dashboard):** Listagem de todos os usuários cadastrados e função de exclusão de contas através de requisições (`DELETE /api/users/:id`).
* **Segurança com Criptografia:** Senhas não são salvas em texto puro; o sistema utiliza a biblioteca `bcrypt` para gerar hashes seguros no banco de dados.
* **Banco de Dados Integrado:** Persistência de dados realística utilizando SQLite, com criação automática do arquivo de banco de dados (`DB.sqlite`) ao iniciar o servidor.
* **Seed de Administrador:** Criação automática de um usuário administrador padrão ao iniciar o sistema, lendo credenciais seguras a partir de um arquivo `.env`.
* **Interface UI/UX:** Design limpo, minimalista e responsivo focado em *Dark Mode*, construído inteiramente com Tailwind CSS.
* **Integração via CORS:** Configuração de cross-origin ativada no back-end para permitir a comunicação fluida com o front-end rodando em portas distintas.

## 🛠️ Tecnologias Utilizadas

### Front-end
* **[React.js](https://react.dev/)** - Biblioteca principal para construção da interface.
* **[Vite](https://vitejs.dev/)** - Ferramenta de build super rápida.
* **[React Router DOM](https://reactrouter.com/)** - Gerenciamento de rotas e navegação da SPA.
* **[Tailwind CSS](https://tailwindcss.com/)** - Framework utilitário de CSS.

### Back-end
* **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript (Server-side).
* **[Express.js](https://expressjs.com/)** - Framework minimalista para criação das rotas da API.
* **[SQLite](https://sqlite.org/)** - Motor de banco de dados relacional (arquivo local).
* **[Bcrypt](https://www.npmjs.com/package/bcrypt)** - Biblioteca para hash e criptografia de senhas.
* **[Dotenv](https://www.npmjs.com/package/dotenv)** - Gerenciamento de variáveis de ambiente.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente na sua máquina. Você precisará rodar o Back-end e o Front-end simultaneamente em terminais separados.

### Pré-requisitos
* [Node.js](https://nodejs.org/) instalado na máquina.
* Git instalado.

### 1. Preparando o Ambiente
Faça o clone deste repositório:
```bash
git clone https://github.com/Ramos-d3v/Sistema-Login.git
cd Sistema-Login
```

### 2. Rodando o Back-end (API)
Abra um terminal e navegue até a pasta do back-end (onde está o server.js):
```bash
cd backend # (Ou o nome da pasta onde seu server está)

# Instale as dependências
npm install

# Crie um arquivo .env na raiz do backend e adicione as seguintes variáveis:
# EMAIL_ADMIN=seu_email
# PASSWORD_ADMIN=sua_senha

# Inicie o servidor
node server.js
```

### 3. Rodando o Front-end (Interface)
Abra outro terminal, mantendo o back-end rodando, e navegue até a pasta do front-end:
```bash
cd frontend # (Ou o nome da pasta do seu React)

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 📝 Próximos Passos (Melhorias Futuras)
- [x] ~~Integrar com uma API real (Node.js) e um Banco de Dados estruturado.~~ (Concluído!)
- [x] ~~Finalizar as requisições POST do front-end para cadastrar novos usuários.~~ (Concluído!)
- [x] ~~Adicionar função de excluir (DELETE) usuários diretamente da lista do Dashboard.~~ (Concluído!)
- [ ] Implementar Tokens (JWT - JSON Web Tokens) para manter o usuário logado e proteger o acesso direto à rota `/dashboard`.