const listaProdutos = require("../models/produtosModel");

const listarProdutos = async (req, res) => {
    const produtos = await listaProdutos.buscarTodos();

    res.json(produtos);
};

const pesquisarProduto = async (req, res) => {
    const id = req.params.id;
    const produto = await listaProdutos.buscarPorId(id);

    if(!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.json(produto);
};

const criarProduto = async (req, res) => {
    const { nome, marca, preco } = req.body;
    const novoProduto = await listaProdutos.criar(nome, marca, preco);

    res.status(201).json(novoProduto);
};

const atualizarProduto = async (req, res) => {
    const id = req.params.id;
    const {nome, marca, preco} = req.body;
    const produto = await listaProdutos.buscarPorId(id);

    if(!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    const produtoAtualizado = await listaProdutos.editar(id, nome, marca, preco);
    res.json(produtoAtualizado);
};

const deletarProduto = async (req, res) => {
    const id = req.params.id;
    const produtoIndex = await listaProdutos.buscarPorId(id);

    if(produtoIndex == -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    await listaProdutos.excluir(id)

    res.json({
        mensagem: "Produto deletado"
    });
};

module.exports = {
    listarProdutos,
    pesquisarProduto,
    criarProduto,
    atualizarProduto,
    deletarProduto
};