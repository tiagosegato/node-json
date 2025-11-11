const express = require('express');
const app = express();
const PORT = 3000;

// permite que o Express interprete automaticamente o corpo das requisições em formato JSON.
app.use(express.json());

// criação de um array de objetos JSON
const usuarios = [{
    nome: "Tiago",
    idade: 38
}]

// Quando o cliente faz uma requisição para http://servidor/usuarios, 
// o servidor responde com o conteúdo da variável usuarios em formato JSON.
app.get('/usuarios', (req, res) => {
    res.json(usuarios); // retorna os usuários contidos no JSON
});

// O cliente envia uma requisição POST para /usuarios, com um JSON no corpo (ex: { "nome": "Tiago" }).
// Graças ao app.use(express.json()), o conteúdo do corpo é convertido em objeto JS e fica acessível em req.body.
app.post('/usuarios', (req, res) => {
    //console.log(req.body);
    usuarios.push(req.body); // adiciona esse novo objeto ao array existente usuarios.
    res.json(usuarios); //devolve o array atualizado como resposta. = linha 17
});

// Cria uma rota DELETE no caminho /usuarios/:id, usada para remover um usuário específico do array usuarios.
// Esse :id é um parâmetro de rota (ex: /usuarios/2) que se deseja excluir.
app.delete('/usuarios/:id', (req, res) => {
    //console.log(req.params.id); -> captura esse valor — neste exemplo, 2.
    usuarios.splice(req.params.id, 1); // remove 1 elemento do array na posição indicada pelo id.
    res.json(usuarios); //idem anteriores
});

// O PUT serve para atualizar um recurso existente, recebendo o ID na URL e os novos dados no corpo da requisição.
app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id; // pega o id da URL
    const dadosAtualizados = req.body; // pega o JSON enviado no corpo
    usuarios.splice(id, 1, dadosAtualizados);// substitui 1 item no índice "id" por novos dados
    res.json(usuarios); //idem anteriores
});

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}!!!!`);
});