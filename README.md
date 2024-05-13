
# CRUD de Sistema de Usuários

Este projeto é um sistema CRUD para gerenciamento de usuários, desenvolvido com Next.js, Typescript e MySQL. Ele permite listar, adicionar, atualizar e deletar usuários através de uma API.

## Pré-requisitos

- Node.js (v18.17.0 ou superior)
- Next.js (v14.2.3)

## Configuração Inicial

Antes de iniciar o projeto, instale as dependências necessárias:

```bash
npm install
```

## Execução do Projeto

Para rodar o projeto localmente e acessar no navegador, utilize o comando:

```bash
npm run dev
```

O sistema estará disponível em `http://localhost:3000`.

## Rodando Migrations

Para configurar o banco de dados, siga os passos abaixo:

1. Instale o Knex globalmente e a biblioteca dotenv:
   
   ```bash
   npm install -g knex
   npm install dotenv
   ```

2. Execute as migrations:

   ```bash
   npx knex migrate:latest
   ```

## Estrutura de Arquivos

- As modificações principais podem ser feitas no arquivo `app/page.tsx`. Mudanças neste arquivo são refletidas automaticamente no navegador.

## Tecnologias Utilizadas

- **Next.js**: Framework para aplicações React
- **Typescript**: Superset de JavaScript com tipagem estática
- **Tailwind CSS**: Framework CSS
- **Axios**: Biblioteca para fazer requisições HTTP
- **React**: Biblioteca para construção de interfaces de usuário
- **React Hook Form**: Biblioteca para gerenciamento de formulários em React
- **MySQL**: Sistema de gerenciamento de banco de dados

## API Endpoints

### GET `/api/users`

Lista todos os usuários.

- **Parâmetros**: Nenhum
- **Resposta (200)**: Retorna a listagem de todos os usuários.

### POST `/api/users`

Cadastra um novo usuário.

- **Parâmetros**:
  - `name`: Nome do usuário
  - `email`: Email do usuário
  - `password`: Senha do usuário
  - `profissao`: Profissão do usuário
- **Resposta (200)**: Usuário cadastrado com sucesso.

### PUT `/api/users?id=2`

Atualiza um usuário existente.

- **Parâmetros**:
  - `id`: ID do usuário
  - `name`: Nome do usuário
  - `email`: Email do usuário
  - `password`: Senha do usuário
  - `profissao`: Profissão do usuário
- **Resposta (200)**: Usuário atualizado com sucesso.

### DELETE `/api/users?id=2`

Deleta um usuário.

- **Parâmetros**:
  - `id`: ID do usuário
- **Resposta (200)**: Usuário deletado com sucesso.

