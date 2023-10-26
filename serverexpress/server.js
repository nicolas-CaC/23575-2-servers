const express = require('express')
const app = express()
const PORT = 8080

app.get('/api', (req, res) => {
    res.send('Soy el get')
})

app.post('/api', (req, res) => {
    console.log(req)
    res.send('Estas por el metodo post')
})

app.put('/api', (req, res) => {
    res.json({ hola: 'Soy yo' })
})

app.listen(PORT, () => {
    console.log(`Escuchando ${PORT} - http://localhost:${PORT}`)
})