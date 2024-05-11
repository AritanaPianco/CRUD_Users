
## CRUD Sistemas de Usuários

Primeiro, instale as dependências:

```bash
npm install

```
Depois, rode o programa com o comando:

```bash
npm run dev

```
 o programa é executado na porta 3000

As modificações ocorrem em `app/page.tsx`. A pagina atualiza ao fazer modificações no arquivo.


### Tecnologias utilizadas

- Nextjs
- Typescript
- Tailwind
- axios
- react
- react-hook-form
- mysql



## Endpoints da Api

### GET / api/users
Esse endpoint é responsável por listar todas os usuarios
#### Parametros
Nenhum
#### Respostas
##### Status: 200
Caso essa resposta aconteca voçe  recebera a listagem de todas os usuarios

### POST / api/users
Esse endpoint é responsável por cadastrar um novo usuário
#### Parametros
- name
- email
- password
- profissao
#### Respostas
##### Status: 200
Caso essa resposta aconteca, o usuario foi cadastrado

### PUT / api/users?id=2
Esse endpoint é responsável por atualizar um usuário
#### Parametros
- id
- name
- email
- password
- profissao
#### Respostas
##### Status: 200
Caso essa resposta aconteca, o usuario foi atualizado

### DELETE / api/users?id=2
Esse endpoint é responsável por deletar um usuário
#### Parametros
- id
#### Respostas
##### Status: 200
Caso essa resposta aconteca, o usuario foi deletado

