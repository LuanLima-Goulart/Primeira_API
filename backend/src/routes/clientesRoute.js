const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController");

router.get("/clientes", clientesController.listarClientes);
router.get("/clientes/:id", clientesController.pesquisarCliente);
router.post("/clientes", clientesController.criarCliente);
router.put("/clientes/:id", clientesController.atualizarCliente);
router.delete("/clientes/:id", clientesController.deletarCliente);

module.exports = router;