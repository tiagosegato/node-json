const express = require('express');
const app = express();

app.use(express.json());

const usuarios = [{
    nome: "Tiago",
    idade: 38
}]

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
    //console.log(req.body);

    usuarios.push(req.body);

    res.json(usuarios);
});

app.delete('/usuarios/:id', (req, res) => {
    //console.log(req.params.id);

    usuarios.splice(req.params.id, 1);

    res.json(usuarios);
});


app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000!");
});