const fs = require('fs')
const http = require('http')
const PORT = 8080

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' })
    // res.end('Holis')

    // res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
    // res.end('<h1>Holis como va?</h1>')

    const file = fs.readFileSync(__dirname + '/index.html')
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
    res.end(file)
})



server.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT} - http://localhost:${PORT}`)
})