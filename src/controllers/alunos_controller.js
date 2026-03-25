const { z } = require('zod');
const { criarAluno, listarAlunos, buscarAlunosPorId, atualizarAluno, deletarAluno } = require('../services/alunos.service');
const { alunoSchema, updateAlunoSchema } = require('../validators/aluno.validator')

// criando a primeira função
function getHome(req,res){
    res.status(200).send('API funcionando via controller')
}

//função que recebe a requisição para criar o aluno
async function criarAlunoController(req, res) {
    try{
        const dadosValidados = alunoSchema.parse(req.body);
        const aluno = await criarAluno(dadosValidados);
        res.status(201).json(aluno);
    }
    catch(error){
        if (error instanceof z.ZodError){
            return res.status(400).json({
                mensagem: "Erro de validação",
                erros: error.issues.map(err => ({ campo: err.path[0], mensagem: err.message }))
            })
        }

        if (error.code === 'P2002'){
            return res.status(409).json({mensagem: 'Matricula ou email ja existentes'})
        }
        
        return res.status(500).json({mensagem: 'Erro interno no servidor'});

    }
}

//função que recebe a requisição para listar os alunos
async function listarAlunosController(req,res) {
    try{
        const aluno = await listarAlunos();
        res.status(200).json(aluno);
    }   
    catch(error){
        console.log(error);
        res.status(500).json({mensagem: 'Erro interno no servidor'})
    }
}

//função que recebe a requisição para listar aluno por id
async function buscarAlunosPorIdController(req, res) {
    try{
        const id = req.params.id;
        const aluno = await buscarAlunosPorId(id);
        if(!aluno){
            return res.status(404).json({mensagem: 'Aluno não encontrado'});
        }

        res.status(200).json(aluno);
    }
    catch(error){
        console.error(error);
        return res.status(500).json({mensagem: 'Erro interno no servidor'});
    }
    
}

// função que recebe a requisição para atualizar aluno
async function atualizarAlunoController(req, res) {
    try{
        const id = req.params.id;
        const data = updateAlunoSchema.parse(req.body)
        const aluno = await atualizarAluno(id, data);
        res.status(200).json(aluno);
    }
    catch(error){
        console.log(error);
        if (error.code === 'P2025'){
            return res.status(404).json({mensagem: 'Aluno não encontrado'})
        }
        return res.status(500).json({mensagem: 'Erro interno no servidor'})
    }
    
}

// função que recebe a requisição para deletar aluno
async function deletarAlunoController(req, res) {
    try{
        const id = req.params.id;
        await deletarAluno(id);
        res.status(204).send();
    }
    catch(error){
        if (error.code === 'P2025'){
            return res.status(404).json({mensagem: 'Aluno não encontrado'});
        }
        console.error(error);
        return res.status(500).json({mensagem: "Erro interno no servidor"});
    }
    
}


//exportando a função
module.exports = { 
    getHome,
    criarAlunoController,
    listarAlunosController,
    buscarAlunosPorIdController,
    atualizarAlunoController,
    deletarAlunoController
 }