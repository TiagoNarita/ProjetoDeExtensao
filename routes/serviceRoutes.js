// routes/serviceRoutes.js

const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

// Rota para obter todos os serviços
router.get("/", serviceController.getAllServices);

// Rota para obter um serviço específico pelo ID
router.get("/:id", serviceController.getServiceById);

// Rota para criar um novo serviço
router.post("/", serviceController.createService);

// Rota para atualizar um serviço pelo ID
router.put("/:id", serviceController.updateService);

// Rota para deletar um serviço pelo ID
router.delete("/:id", serviceController.deleteService);

module.exports = router;
