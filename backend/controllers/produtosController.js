const listaProdutos = require("../models/produtosModel");

const listarProdutos = (req, res) => {
    res.json(listaProdutos);
}

const pesquisarProduto = (req, res) => {
    const id = req.params.id;
    const produto = listaProdutos.find(produto => produto.id == id);

    if(!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.json(produto);
}

const criarProduto = (req, res) => {
    const novoProduto = {
        id: listaProdutos.length + 1,
        nome: req.body.nome,
        marca: req.body.marca,
        preco: req.body.preco
    };

    listaProdutos.push(novoProduto);
    res.status(201).json(novoProduto);
}

const atualizarProduto = (req, res) => {
    const id = req.params.id;
    const produto = listaProdutos.find(produto => produto.id == id);

    if(!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produto.nome = req.body.nome;
    produto.marca = req.body.marca;
    produto.preco = req.body.preco;

    res.json(produto);
}

const deletarProduto = (req, res) => {
    const id = req.params.id;
    const produtoIndex = listaProdutos.findIndex(produto => produto.id == id);

    if(produtoIndex == -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    listaProdutos.splice(produtoIndex, 1);

    res.json({
        mensagem: "Produto deletado"
    });
}

module.exports = {
    listarProdutos,
    pesquisarProduto,
    criarProduto,
    atualizarProduto,
    deletarProduto
};