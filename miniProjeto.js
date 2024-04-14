const express = require('express');
const { body, validationResult } = require('express-validator');

const routes = express();
const PORT = 8000;
const listaTemporaria = [];

routes.use(express.json());


routes.post('/produtos',[
    body('nome').notEmpty().isString(),
    body('preco').notEmpty().isNumeric(),
    body('descricao').notEmpty().isString(),
],

(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ error: errors.array() });
    }

  
    const produto = {
        id: listaTemporaria.length + 1,
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    };

    listaTemporaria.push(produto);

    res.json(produto);
});


routes.get('/produtos', (req, res) =>{
    res.json(listaTemporaria); 
});


routes.put('/produtos/:id', (req, res) =>{
    const produtoId = req.params.id;
    const {nome, preco, descricao } = req.body;
    res.send('Recurso atualizado com sucesso');
});

routes.delete('/produtos/:id', (req, res) => {
    const produtoId = req.params.id;
    const index = listaTemporaria.findIndex(produto => produto.id === parseInt(produtoId));2
    if (index !== -1) {
        listaTemporaria.splice(index, 1);
        return res.send(`Produto com ID ${produtoId} excluído com sucesso.`);
    } else {
        return res.status(404).send(`Produto com ID ${produtoId} não encontrado.`);
    }
});





routes.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});


routes.listen(PORT, () =>{
    console.log('Servidor rodando na porta ' + PORT);
});