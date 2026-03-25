// importa o express
const express = require("express")
// importa o modulo de routes
const alunosRoutes = require('./routes/alunos_routes')

// criando aplicação express
const app = express()
// para permitir que o programa leia json
app.use(express.json())

// registrando as rotas - 
app.use(alunosRoutes)


// criando primeiro endpoint
app.get("/", (req, res) => {
    res.send("API de alunos rodando");
})

const port = 3000

app.listen(port, () => {
    console.log(`rodando na porta ${port} `);
})