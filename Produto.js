const {connection} = require("../database/connection");

//aqui criei uma variavel para a conexao entre o BD  
//tenho que criar uma para cada tabela que eu queira manipular no BD 

 const Produto = connection.define('produtos', {
    nome: {
        type: DataTypes.STRING 
    },
    valor: {
        type: DataTypes.STRING 
    },
    descricao: {
        type: DataTypes.STRING
    },


});

module.exports = ProdutoS