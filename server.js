const http = require("http")
const {Server} = require("socket.io")
const httpServer = http.createServer()
const io = new Server(httpServer)

io.on("connection", (socket) => { 
    console.log('connection success', `socket id: ${socket.id}`)

    socket.on("say", (data) => {
        console.log(data)
    })

    socket.on("hi", (data) => {
        console.log(data)
        console.log(io.engine.clientsCount)
    })

    socket.onAny((event, ...args) => {
        console.log(`event: ${event}`)
    })
})



httpServer.listen(3000, () => {
    console.log("listening on *:3000")
})