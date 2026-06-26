# SmartTasks – Frontend

## 📌 Stack

![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-yellow?style=for-the-badge)

- React
- TypeScript
- Spring Boot
- Spring Security
- JWT
- MySQL

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

---

## 📸 Screenshots

### Login

<img src="screenshots/login.png" width="800"/>

### Dashboard

<img src="screenshots/dashboard.png" width="800"/>

---

## 🏛 Arquitetura da aplicação

Usuário
│
▼
React + TypeScript
│
▼
Axios
│
▼
Spring Boot
│
▼
Spring Security (JWT)
│
▼
JPA / Hibernate
│
▼
MySQL

---

## 🛠 Funcionalidades em desenvolvimento

- Melhorias visuais
- Casos de teste Postman
- Filtro e ordenação de tarefas

---

## 🛠 Tecnologias Utilizadas

Frontend:

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router

Backend:

- Java 21
- Spring Boot 4
- Spring Security
- JWT
- JPA/Hibernate
- MySQL

---

## 🔗 Backend

O backend da aplicação está disponível neste repositório:

👉 github: https://github.com/DanyelaSoares/SmartTasks-Backend

Nele também estão disponíveis:

- Script de criação do banco de dados
- Documentação da API

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

---

## 🔐 Autenticação

A aplicação utiliza autenticação baseada em JWT (JSON Web Token).

Após o login, o backend gera um token JWT, que é armazenado no navegador e utilizado para autenticar automaticamente todas as requisições protegidas da aplicação.

---

### Credenciais de teste

Cadastre um novo usuário pela tela de registro e utilize as credenciais criadas para acessar o sistema.

---

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

---

## 🎯 Escopo do sistema

### ✅ Funcionalidades já implementadas

- Cadastro de usuários
- Login com autenticação JWT
- Dashboard protegido por autenticação
- CRUD completo de tarefas (criação, listagem, edição, conclusão e exclusão)
- Persistência dos dados em MySQL

---

### 🛠 Implementação técnica

- Aplicação desenvolvida em React com TypeScript
- Consumo de API REST utilizando Axios
- Controle global de autenticação via React Context
- Rotas protegidas com React Router
- Armazenamento do token JWT e email no localStorage
- Restauração automática da sessão

---

### 🛠 Funcionalidades planejadas (próximas etapas)

- Filtro e ordenação de tarefas
- Tratamento global de erros de API
- Melhorias visuais na interface
- Casos de teste automatizados

---

## 🔐 Regras de autenticação e segurança

- O acesso à rota `/dashboard` é permitido apenas para usuários autenticados.
- A autenticação é controlada por um token armazenado no `localStorage`.
- Ao efetuar login com sucesso:
  - O token e o email do usuário são persistidos no `localStorage`.
  - Todas as requisições autenticadas enviam automaticamente o token JWT por meio de um interceptor Axios.
  - O estado global de autenticação é atualizado.
- Ao acessar uma rota protegida sem autenticação:
  - O usuário é automaticamente redirecionado para a tela de login.
- Ao recarregar a página:
  - A aplicação verifica a existência de sessão no `localStorage` e restaura o login.

---

## 👩‍💻 Autora

**Daniela Soares**

- LinkedIn: https://www.linkedin.com/in/danielasoares3
- GitHub: https://github.com/DanyelaSoares
