// controllers/appointmentController.js

const appointmentModel = require("../models/appointmentModel");

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await appointmentModel.getAllAppointments();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter agendamentos", error });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await appointmentModel.getAppointmentById(
      req.params.id
    );
    if (!appointment)
      return res.status(404).json({ message: "Agendamento não encontrado" });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter agendamento", error });
  }
};

exports.createAppointment = async (req, res) => {
  const { ClienteId, ServicoId, DataAtendimento, Horario } = req.body;
  try {
    const result = await appointmentModel.createAppointment({
      ClienteId,
      ServicoId,
      DataAtendimento,
      Horario,
    });
    res.status(201).json({ message: "Agendamento criado com sucesso", result });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar agendamento", error });
  }
};

exports.updateAppointment = async (req, res) => {
  const { ClienteId, ServicoId, DataAtendimento, Horario } = req.body;
  const id = req.params.id;
  try {
    const result = await appointmentModel.updateAppointment(id, {
      ClienteId,
      ServicoId,
      DataAtendimento,
      Horario,
    });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Agendamento não encontrado" });
    res
      .status(200)
      .json({ message: "Agendamento atualizado com sucesso", result });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar agendamento", error });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const result = await appointmentModel.deleteAppointment(req.params.id);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Agendamento não encontrado" });
    res.status(200).json({ message: "Agendamento deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar agendamento", error });
  }
};

exports.getAppointmentsForClient = (req, res) => {
  const { ClienteId } = req.params; // Captura o ClienteId da URL

  appointmentModel
    .getAppointmentsByClientId(ClienteId)
    .then((appointments) => {
      res.status(200).json({ appointments });
    })
    .catch((error) => {
      res.status(500).json({ message: "Erro ao buscar agendamentos" });
    });
};
