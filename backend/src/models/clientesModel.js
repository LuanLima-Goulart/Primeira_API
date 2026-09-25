const db = require("../config/db");

const buscarTodos = async () => {
    const [clientes] = await db.query(
        "SELECT * FROM clientes;"
    );

    return clientes;
};

const buscarPorId = async (id) => {
    const [clientes] = await db.query(
        "SELECT * FROM clientes WHERE id = ?;",
        [id]
    );

    return clientes[0];
};

const criar = async (nome, marca, preco) => {
    const cliente = await db.query(
        "INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?);",
        [nome, marca, preco]
    );

    return {
        id: cliente.insertId,
        nome,
        email,
        telefone
    };
};

const editar = async (id, nome, email, telefone) => {
    await db.query(
        "UPDATE clientes SET nome=?, email=?, telefone=? WHERE id=?",
        [nome, email, telefone, id]
    );

    return {
        nome,
        email,
        telefone
    };
};

const excluir = async (id) => {
    const [resultado] = await db.query(
        "DELETE FROM clientes WHERE id=?",
        [id]
    );

    return resultado.affectedRows;
};

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    editar,
    excluir
};