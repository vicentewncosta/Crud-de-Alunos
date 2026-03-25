// criando conexão com o prisma

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient;

async function create(data) {
    return await prisma.aluno.create({ data });
}

async function findAll() {
    return await prisma.aluno.findMany();
}

async function findById(id) {
    return await prisma.aluno.findUnique({
        where: { id: Number(id) }
    });
}

async function update(id, data) {
    return await prisma.aluno.update({
        where: {id:Number(id)},
        data: data
    });
}

async function remove(id) {
    return await prisma.aluno.delete({
        where: {id:Number(id)}
    });
    
}

module.exports = {create, findAll, findById, update, remove}