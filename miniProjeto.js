const {body, validationResult} = require('express-validator');

const app = express();
const PORT = 3000;

//1-Crie uma rota POST para adicionar um novo produto.

//2-A rota deve receber um JSON com os dados do produto (por exemplo, nome, preço, descrição) para esta rota.

routes.post('/produtos', async (req, res) =>{
    const produto = await Produto.create({
        nome:'Jaqueta',
        preco:'250',
        descricao:'jaqueta jeans'
    })
    res.json(produto)

})

//3-O servidor deve validar os dados recebidos e adicionar o produto a uma lista temporária.

routes.post('/produtos',[
    body('nome').notEmpty().isString(),
    body('preco').notEmpty().isNumeric(),
    body('descricao').notEmpty().isString(),

    //"Para o campo 'nome' na requisição, verifique se não está vazio e se é uma string (ou seja, texto)."

], (req, res) => {
     
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({ error: error.array() });
    }

    //validação ok, cria o produto 

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    };

    listaTemporaria.push(produto);

    res.json(produto);

});

//Crie uma rota GET para obter todos os produtos.


routes.get('/produtos', (req, res) =>{
    res.json(listaTemporaria); 
});

//Atualizar Produto:

//Crie uma rota PUT para atualizar um produto existente.

//A rota deve receber um JSON com os dados atualizados do produto, incluindo o ID do produto a ser atualizado.

//O servidor deve encontrar o produto na lista pelo ID e atualizar seus dados.

routes.put('/produtos/id', (req, res) =>{
    const produtoId = req.params.id;

});

//Excluir Produto (DELETE):
//Crie uma rota DELETE '/produtos/:id' para excluir um produto existente, onde :id é o ID do produto a ser excluído.
//O servidor deve encontrar o produto na lista pelo ID e removê-lo.

routes.delete('/produtos/:id', (req, res) =>{
    const ProdutoId = req.params.id;
});

routes.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});


//TESTANDO GITHUB
