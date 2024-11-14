// controllers/serviceController.js

const serviceModel = require("../models/serviceModel");

exports.getAllServices = async (req, res) => {
  try {
    const services = await serviceModel.getAllServices();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter os serviços", error });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const service = await serviceModel.getServiceById(req.params.id);
    if (!service)
      return res.status(404).json({ message: "Serviço não encontrado" });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter o serviço", error });
  }
};

exports.createService = async (req, res) => {
  const { Nome, Preco } = req.body;
  try {
    const result = await serviceModel.createService({ Nome, Preco });
    res
      .status(201)
      .json({ message: "Serviço criado com sucesso", id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar o serviço", error });
  }
};

exports.updateService = async (req, res) => {
  const { Nome, Preco } = req.body;
  try {
    const result = await serviceModel.updateService(req.params.id, {
      Nome,
      Preco,
    });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Serviço não encontrado" });
    res
      .status(200)
      .json({ message: "Serviço atualizado com sucesso", result });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar o serviço", error });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const result = await serviceModel.deleteService(req.params.id);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Serviço não encontrado" });
    res.status(200).json({ message: "Serviço deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar o serviço", error });
  }
};
