# 🔐 React Admin & Login System

Um sistema front-end de autenticação e painel administrativo desenvolvido com React. O projeto simula um fluxo real de login e registro de usuários, utilizando o `localStorage` do navegador para garantir a persistência dos dados sem a necessidade de um back-end.

## ✨ Funcionalidades

*   **Autenticação de Usuários:** Tela de login funcional que valida credenciais (e-mail e senha).
*   **Rotas Protegidas (Simulação):** Navegação fluida entre telas públicas (Login) e privadas (Dashboard) utilizando o React Router.
*   **Painel Administrativo (Dashboard):** Área logada que permite o cadastro de novos usuários no sistema.
*   **Persistência de Dados:** Uso de `localStorage` para manter os usuários salvos mesmo após o recarregamento da página ou troca de rotas.
*   **Interface UI/UX:** Design limpo, minimalista e responsivo focado em *Dark Mode*, construído inteiramente com Tailwind CSS.

## 🛠️ Tecnologias Utilizadas

*   **[React.js](https://react.dev/)** - Biblioteca principal para construção da interface.
*   **[Vite](https://vitejs.dev/)** - Ferramenta de build super rápida para iniciar o projeto.
*   **[React Router DOM](https://reactrouter.com/)** - Gerenciamento de rotas e navegação da SPA (Single Page Application).
*   **[Tailwind CSS](https://tailwindcss.com/)** - Framework utilitário de CSS para estilização rápida e padronizada.
*   **JavaScript (ES6+)** - Lógica de manipulação de arrays e objetos.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente na sua máquina.

### Pré-requisitos
Você precisará ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

### Passos
1. Faça o clone deste repositório:
   ```bash
   git clone https://github.com/Ramos-d3v/Sistema-Login.git


📝 Próximos Passos (Melhorias Futuras)
[ ] Implementar Context API para proteger a rota do Dashboard via código.

[ ] Adicionar função de excluir ou editar usuários na lista do Dashboard.

[ ] Integrar com uma API real (Node.js/Java) e um Banco de Dados estruturado.