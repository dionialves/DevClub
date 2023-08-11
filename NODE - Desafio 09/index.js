const express = require("express");
const uuid = require("uuid")

const app = express();
const PORT = 3000;

app.use(express.json())


let customerOrder = []

const printLog = ((request, response, next) => {
    console.log(`Url: ${request.url} | Method: ${request.method}`)
    next()
})

const checkUserId = ((request, response, next) => {
    const { id } = request.params
    const index = customerOrder.findIndex(order => order.id === id)
    request.index = index

    if (index < 0) {
        return response.status(404).json({ error: "Order not found" })
    }

    next()
})

app.post('/order', printLog, (request, response) => {
    const { order, clientName, price } = request.body
    const newOrder = { id: uuid.v4(), order, clientName, price, status: "Em preparação" }

    customerOrder.push(newOrder)

    response.status(201).json(newOrder)
})

app.get('/order/:id', printLog, checkUserId, (request, response) => {
    const { id } = request.params

    order = customerOrder.find(order => order.id === id)

    response.json(order)
})

app.get('/order', printLog, (request, response) => {
    response.json(customerOrder)
})

app.put('/order/:id', printLog, checkUserId, (request, response) => {
    const { id } = request.params
    const { order, clientName, price } = request.body

    updateOrder = { id, order, clientName, price, status: "Em preparação" }
    index = customerOrder.findIndex(order => order.id === id)
    customerOrder[index] = updateOrder

    response.json(updateOrder)
})

app.delete('/order/:id', printLog, checkUserId, (request, response) => {
    const { id } = request.params

    index = customerOrder.findIndex(order => order.id === id)
    customerOrder.splice(index, 1)

    response.status(201).json()
})

app.patch('/order/:id', printLog, checkUserId, (request, response) => {
    const { id } = request.params
    let changedOrder = {}

    //index = customerOrder.findIndex(order => order.id === id)
    const newCustomerOrder = customerOrder.map(order => {
        if (order.id === id) {
            order.status = "Pronto"
            changedOrder = order
        }
        return order
    })
    customerOrder = newCustomerOrder
    response.json(changedOrder)
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});