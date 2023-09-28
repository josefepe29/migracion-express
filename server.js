const express = require ('express')
const app = express()
const host = 'localhost'
const tareasModule = require('./script');

const tareas = tareasModule.tareas

const port = 8080

app.get('/', (req, res) => {
    console.log(tareas)
  res.send(JSON.stringify(tareas))
})

app.listen(port, () => {
    console.log(`Servidor activo en ${port}`)
})