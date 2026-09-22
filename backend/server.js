const express = require("express");
const app = express();
const PORT = 3033;

const produtos = [
    {
        id: 1,
        nome: "Notebook",
        marca: "Samsung",
        preco: 3500.00
    },
    {
        id: 2,
        nome: "Mouse",
        marca: "Redragon",
        preco : 199.90
    }
];

app.use(express.json());

app.get("/produtos", (request, response) => {
    response.json(produtos);
});

app.get("/produtos/:id", (request, response) => {
    const id = request.params.id;
    const produto = produtos.find(produto => produto.id == id);

    if(!produto) {
        return response.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    response.json(produto);
});

app.post("/produtos", (request, response) => {
    const novoProduto = {
        id: produtos.length + 1,
        nome: request.body.nome,
        marca: request.body.marca,
        preco: request.body.preco
    };

    produtos.push(novoProduto);
    response.status(201).json(novoProduto);
});

// app.put();

// app.delete();

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
