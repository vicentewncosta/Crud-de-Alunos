// primeiro importa o express
const express = require("express");
const { getHome, criarAlunoController, listarAlunosController, buscarAlunosPorIdController, atualizarAlunoController, deletarAlunoController } = require('../controllers/alunos_controller')

// cria a aplicação express
const router = express.Router();

// cria um endpoint
router.get("/home", getHome)

//rota para criar aluno
router.post('/alunos', criarAlunoController)

//rota para listar alunos
router.get('/alunos',listarAlunosController )

//rota para listar alunos por id
router.get('/alunos/:id', buscarAlunosPorIdController)

//rota para atualizar aluno
router.put('/alunos/:id', atualizarAlunoController)

//rota para deletar aluno
router.delete('/alunos/:id', deletarAlunoController)

// exporta o modulo
module.exports = router