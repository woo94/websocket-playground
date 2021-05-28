const io = require("socket.io-client")

const socket = io("http://localhost:3000")

socket.on("connect", () => {
    console.log("client connect")

    console.log(socket.id)

    socket.emit("hi", "hello")

    socket.emit("say", "hi")
})