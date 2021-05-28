const express = require('express')
const http = require("http")
const {Server} = require("socket.io")
``
const app = express()
const httpServer = http.createServer(app)
// const httpServer = http.createServer()
const io = new Server(httpServer)

app.get("/",  (req, res) => {
    res.send("hi")
})

io.on("connection", (socket) => { 
    console.log('connection success ' + socket.id)

    socket.on("say", (data) => {
        console.log(data)
    })

    socket.on("hi", (data) => {
        console.log(data)
        console.log(io.engine.clientsCount)
    })

    socket.onAny((event, ...args) => {
        console.log(`got ${event}`)
    })
})



httpServer.listen(3000, () => {
    console.log("listening on *:3000")
})