# 📚 CRUD de Alunos - API REST

Esta é uma API robusta para gerenciamento de alunos, desenvolvida com **Node.js** e **Prisma ORM**. O projeto segue padrões de mercado como a **Arquitetura em Camadas (Controller, Service, Repository)** e possui validação rigorosa de dados para garantir a integridade do sistema acadêmico.

## 🛠️ Tecnologias Utilizadas

* **Runtime:** [Node.js](https://nodejs.org/)
* **Framework:** [Express](https://expressjs.com/)
* **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/) (via Docker ou Local)
* **ORM:** [Prisma](https://www.prisma.io/)
* **Validação:** [Zod](https://zod.dev/)
* **Linguagem:** JavaScript (ES6+)

---

## 🏗️ Arquitetura do Projeto

O projeto foi estruturado para ser escalável e fácil de manter, separando responsabilidades de forma clara:

1.  **Routes:** Define os endpoints e direciona as requisições.
2.  **Controllers:** Gerencia a entrada das requisições HTTP e define os Status Codes de resposta.
3.  **Validators (Zod):** Camada de segurança que garante que os dados de entrada estão no formato correto.
4.  **Services:** Onde reside a **Lógica de Negócio** (ex: cálculo automático de situação Aprovado/Reprovado).
5.  **Repositories:** Camada isolada que se comunica exclusivamente com o banco de dados via Prisma.

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
cd crud-alunos-node
```

### 2. Instalar dependências
```bash
npm install
```



### 3. Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto e adicione a URL de conexão com o seu banco de dados:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
```

### 4. Rodar as Migrations do Prisma
```bash
npx prisma migrate dev
```

### 5. Iniciar o Servidor
```bash
npm run dev
```

A API estará disponível em:  
👉 http://localhost:3000

---

## 🛣️ Endpoints da API

| Método | Endpoint     | Descrição |
|--------|--------------|----------|
| POST   | /alunos      | Cria um novo aluno (Validação rigorosa com Zod) |
| GET    | /alunos      | Lista todos os alunos (Inclui campo dinâmico de Situação) |
| GET    | /alunos/:id  | Busca um aluno específico pelo ID |
| PUT    | /alunos/:id  | Atualiza dados de um aluno (Validação parcial permitida) |
| DELETE | /alunos/:id  | Remove um aluno do sistema |

---

## 🧪 Testando a API com Postman

Você pode testar todos os endpoints utilizando o **Postman** ou qualquer ferramenta similar (Insomnia, Thunder Client, etc.).

### 🔹 Passo a passo

1. Abra o Postman
2. Crie uma nova requisição
3. Escolha o método HTTP (GET, POST, PUT, DELETE)
4. Use a URL base:
```
http://localhost:3000
```

---

### 🔸 Exemplo: Criar um aluno (POST /alunos)

- Método: `POST`
- URL:  
```
http://localhost:3000/alunos
```

- Body (JSON):
```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "matricula": "12345",
  "nota": 8.5
}
```

---

### 🔸 Exemplo: Listar alunos (GET /alunos)

- Método: `GET`
- URL:
```
http://localhost:3000/alunos
```

---

### 🔸 Exemplo: Atualizar aluno (PUT /alunos/:id)

- Método: `PUT`
- URL:
```
http://localhost:3000/alunos/1
```

- Body (JSON - parcial permitido):
```json
{
  "nota": 9
}
```

---

### 🔸 Exemplo: Deletar aluno (DELETE /alunos/:id)

- Método: `DELETE`
- URL:
```
http://localhost:3000/alunos/1
```

---


## 🛡️ Validações Implementadas (Zod)

Para garantir dados limpos, as seguintes regras foram aplicadas:

- **Nome:** Mínimo de 3 caracteres e remoção automática de espaços inúteis (`.trim()`).
- **E-mail:** Validação de formato e restrição de unicidade no banco.
- **Matrícula:** Campo obrigatório, único e com tamanho mínimo seguro.
- **Nota:** Conversão automática para número (`coerce`) e intervalo entre 0 e 10.

---

## 🔒 Próximos Passos

- [ ] Implementação de Middleware de Autenticação (API Key / JWT)
- [ ] Desenvolvimento do Frontend (React + Vite)
- [ ] Implementação de Testes Automatizados

---

## 👨‍💻 Autor

Desenvolvido por **Felype Gallotte**  