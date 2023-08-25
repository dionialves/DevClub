// Importa o framework express e biblioteca uuid para criação de IDs dinamicos
const express = require('express');
const uuid = require('uuid');
const cors = require('cors');

// Cria uma variável contendo o framework e define uma variavel para conter a
// porta que será usado por ele
const app = express();
const port = 3001;

// Informa ao express que ele vai trabalhar apenas com JSON
app.use(express.json());
app.use(cors());

// Lista de usuários simulando um banco de bados
// lembrando que essa aplicação é para fins eduacionais
const users = []

// Criado uma middlewares para validar o id do usuário
const checkUserId = ((request, response, next) => {
    const { id } = request.params
    const index = users.findIndex(user => user.id === id)
    request.index = index

    if (index < 0) {
        return response.status(404).json({ error: "User not found" })
    }

    next()
})

// Rota com GET para listar usuários criados
app.get('/users', (request, response) => {
    return response.json(users)
})

// Rota com post para receber informações do front-end e criar usuário
app.post('/users', (request, response) => {
    const { name, age } = request.body
    const user = { id: uuid.v4(), name, age }

    users.push(user)

    return response.status(201).json(user)
})

// Rota para alteração de usuário, essa rota o middlewares antes para validação do ID
app.put('/users/:id', checkUserId, (request, response) => {
    const { name, age } = request.body
    const { id } = request.params
    const index = request.index

    const userUpdate = { id, name, age }
    users[index] = userUpdate

    return response.json(userUpdate)
})

// Rota para deletar o usuário, essa rota o middlewares antes para validação do ID
app.delete('/users/:id', checkUserId, (request, response) => {
    const { id } = request.params
    const index = request.index

    users.splice(index, 1)

    return response.status(204).json()
})

// Aqui rodamos o servidor
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

