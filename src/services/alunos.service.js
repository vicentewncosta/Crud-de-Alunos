

const alunoRepository = require('../repositories/aluno.repository');


//função para criar aluno no banco
async function criarAluno(dados) {
    return await alunoRepository.create(dados)
}

//função para listar os alunos que tem no banco
async function listarAlunos() {
    const alunos = await alunoRepository.findAll();
    return alunos.map(aluno => {
        return {
            ...aluno,
            situacao: aluno.nota >= 6 ? "APROVADO" : "REPROVADO"
        };
    });
    
}

// função para listar os alunos por id que tem no banco
async function buscarAlunosPorId(id) {
    const aluno = await alunoRepository.findById(id);
    
    // Se o aluno existir, também adicionamos a situação dele aqui
    if (aluno) {
        return {
            ...aluno,
            situacao: aluno.nota >= 6 ? "APROVADO" : "REPROVADO"
        };
    }
    
    return null;

    
}

// função para atualizar aluno no banco
async function atualizarAluno(id, dados) {
    return await alunoRepository.update(id, dados);
    
}

// função para deletar aluno que tem no banco
async function deletarAluno(id) {
    return await alunoRepository.remove(id);
    
}

module.exports = { 
    criarAluno,
    listarAlunos,
    buscarAlunosPorId,
    atualizarAluno,
    deletarAluno
 }