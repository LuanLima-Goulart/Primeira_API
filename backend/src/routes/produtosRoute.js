const express = require("express");
const router = express.Router();
const produtosController = require("../controllers/produtosController");

router.get("/produtos", produtosController.listarProdutos);
router.get("/produtos/:id", produtosController.pesquisarProduto);
router.post("/produtos", produtosController.criarProduto);
router.put("/produtos/:id", produtosController.atualizarProduto);
router.delete("/produtos/:id", produtosController.deletarProduto);

module.exports = router;