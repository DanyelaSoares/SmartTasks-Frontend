# SmartTasks – Frontend

![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-yellow?style=for-the-badge)


Este repositório contém o **frontend** do projeto **SmartTasks**, um sistema de gerenciamento de tarefas fullstack.

O frontend foi desenvolvido em **React** e consome as APIs do backend em Java Spring Boot.

---
## 📐 Visão Funcional

O SmartTasks é um sistema de gerenciamento de tarefas com foco em autenticação, controle de acesso e comunicação com APIs REST.

O projeto foi concebido para praticar e demonstrar:

- Fluxos de autenticação
- Regras de acesso e proteção de rotas
- Estruturação de interfaces
- Comunicação frontend ↔ backend
  
## 🚀 Funcionalidades

- Tela de login e registro de usuários
- Controle de autenticação global (Context API)
- Rotas protegidas (dashboard)
- Interface responsiva com Tailwind CSS
- Estrutura pronta para gerenciamento de tarefas

---

## 🛠 Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios

---

## 🔗 Backend

O backend do projeto está neste repositório separado:  
👉 https://github.com/DanyelaSoares/SmartTasks-Backend

---

## ⚡ Como rodar

1. Clone o repositório.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npm run dev
```

O frontend estará disponível em:
👉 http://localhost:5173

## 🔐 Autenticação

A aplicação possui autenticação básica com:

- Fluxo de autenticação simulado (mock), em preparação para integração com backend
- Armazenamento de token e email no localStorage
- Estado global de autenticação via React Context
- Restauração automática da sessão ao recarregar a página

### Credenciais de teste

Email: novo123@teste.com  
Senha: 41785

## 🧭 Fluxo básico do usuário

1. O usuário acessa a aplicação pela rota inicial (`/` ou `/login`).
2. Caso não esteja autenticado, é exibida a tela de login.
3. O usuário informa email e senha.
4. Ao submeter o formulário de login:
   - A aplicação chama o serviço de autenticação (`loginUser`).
   - Em caso de sucesso:
     - O token e o email do usuário são armazenados no `localStorage`.
     - O estado global de autenticação é atualizado via React Context.
     - O usuário é redirecionado automaticamente para a rota protegida `/dashboard`.
   - Em caso de erro:
     - Uma mensagem de erro é exibida na tela de login.
5. Ao acessar rotas protegidas:
   - Se o usuário estiver autenticado, o acesso é permitido.
   - Se não estiver autenticado, ele é redirecionado para a tela de login.
6. Ao recarregar a página:
   - A aplicação restaura automaticamente a sessão do usuário a partir do `localStorage`.

## 🎯 Escopo do sistema

### ✅ Funcionalidades já implementadas

- Tela de login de usuários
- Tela de registro de usuários (mock)
- Autenticação básica (mock)
- Armazenamento de token e email no `localStorage`
- Controle de autenticação global via React Context
- Rotas protegidas com React Router
- Restauração automática da sessão ao recarregar a página
- Dashboard acessível apenas para usuários autenticados

---

### 🛠 Funcionalidades planejadas (próximas etapas)

- Integração real com o backend Spring Boot
- Cadastro real de usuários
- Login real com JWT
- CRUD de tarefas:
  - Criar tarefas
  - Listar tarefas
  - Editar tarefas
  - Excluir tarefas
- Marcação de tarefas como concluídas
- Filtro e ordenação de tarefas
- Logout com invalidação de sessão
- Tratamento global de erros de API
- Proteção de rotas baseada em token JWT real

## 🔐 Regras de autenticação e segurança

- O acesso à rota `/dashboard` é permitido apenas para usuários autenticados.
- A autenticação é controlada por um token armazenado no `localStorage`.
- Ao efetuar login com sucesso:
  - O token e o email do usuário são persistidos no `localStorage`.
  - O estado global de autenticação é atualizado.
- Ao acessar uma rota protegida sem autenticação:
  - O usuário é automaticamente redirecionado para a tela de login.
- Ao recarregar a página:
  - A aplicação verifica a existência de sessão no `localStorage` e restaura o login.
