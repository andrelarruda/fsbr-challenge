# Desafio FSBR

# Descrição

Este projeto é uma aplicação composta por backend e frontend, que implementa um sistema de CRUD (Create, Read, Update, Delete) para gerenciamento de produtos e suas respectivas categorias.

# Features implementadas: 

## Backend

- Banco de dados com LocalDB
- Autenticação (apenas backend)
- Validação de dados com Fluent Validation

## Frontend

- RTK Query
- Ant Design
- Navegação com react-router-dom
- Validação com Ant Design

# Para rodar o back end

1. Abra a solution com o Visual Studio 2022.
2. Altere a Connection String no appsettings.json com a connection strings do  seu banco de dados (LocalDB).
3. Clique em Build > Build Solution
4. Clique em Debug > Start Debugging

# Para rodar o front end

1. Rode o comando `npm install`
2. Crie um arquivo .env na raiz do projeto e adicione a variavel `API_BASE_URL` com a url base do back end.
3. Rode o comando `npm run dev`

