const listaClientes = require("../models/clientesModel");

const listarClientes = (req, res) => {
    res.json(listaClientes);
}

const pesquisarCliente = (req, res) => {
    const id = req.params.id;
    const cliente = listaClientes.find(cliente => cliente.id == id);

    if(!cliente) {
        return res.status(404).json({
            mensagem: "Cliente não encontrado"
        });
    }

    res.json(cliente);
}

const criarCliente = (req, res) => {
    const novoCliente = {
        id: listaClientes.length + 1,
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone
    };

    listaClientes.push(novoCliente);
    res.status(201).json(novoCliente);
}
const atualizarCliente = (req, res) => {
    const id = req.params.id;
    const cliente = listaClientes.find(cliente => cliente.id == id);

    if(!cliente) {
        return res.status(404).json({
            mensagem: "Cliente não encontrado"
        });
    }

    cliente.nome = req.body.nome;
    cliente.email = req.body.email;
    cliente.telefone = req.body.telefone;

    res.json(cliente);
}

const deletarCliente = (req, res) => {
    const id = req.params.id;
    const clienteIndex = listaClientes.findIndex(cliente => cliente.id == id);

    if(clienteIndex == -1) {
        return res.status(404).json({
            mensagem: "Cliente não encontrado"
        });
    }

    listaClientes.splice(clienteIndex, 1);

    res.json({
        mensagem: "Cliente deletado"
    });
}

module.exports = {
    listarClientes,
    pesquisarCliente,
    criarCliente,
    atualizarCliente,
    deletarCliente
};