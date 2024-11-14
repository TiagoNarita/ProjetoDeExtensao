const Client = require("../models/clientModel");

exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.getAllClients();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving clients", error });
  }
};

exports.getClientById = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.getClientById(id);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving client", error });
  }
};

exports.createClient = async (req, res) => {
  const { name, cpf, phone, email } = req.body;
  try {
    const newClient = await Client.createClient({ name, cpf, email, phone });
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ message: "Error creating client", error });
  }
};

exports.updateClient = async (req, res) => {
  const { id } = req.params;
  const { name, cpf, phone, email } = req.body;
  try {
    const updatedClient = await Client.updateClient(id, {
      name,
      cpf,
      phone,
      email,
    });
    if (!updatedClient) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: "Error updating client", error });
  }
};

// // Delete a client
exports.deleteClient = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const deletedClient = await Client.deleteClient(id);
    if (!deletedClient) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.status(200).json({ message: "Client deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting client", error });
  }
};
