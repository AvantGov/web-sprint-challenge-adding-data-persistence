const server = require("./server")

const PORT = process.env.port || 5000;

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

