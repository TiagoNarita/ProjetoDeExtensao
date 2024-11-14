const express = require("express");
const clientController = require("../controllers/clientController");

const router = express.Router();

//Rota para pegar todos os clientes
router.get("/clients", clientController.getAllClients);

router.get("/clients/:id", clientController.getClientById);

// Rota para criar um novo cliente
router.post("/clients", clientController.createClient);

// Rota para atualizar um cliente pelo ID
router.put("/clients/:id", clientController.updateClient);

// // Rota para deletar um cliente pelo ID
router.delete("/clients/:id", clientController.deleteClient);

module.exports = router;
