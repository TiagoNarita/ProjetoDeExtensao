// models/appointmentModel.js

const db = require("../config/dbConn");

exports.getAllAppointments = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM agendamentos", (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

exports.getAppointmentById = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM agendamentos WHERE Id = ?",
      [id],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0]);
      }
    );
  });
};

exports.createAppointment = (appointmentData) => {
  const { ClienteId, ServicoId, DataAtendimento, Horario } = appointmentData;
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO agendamentos (ClienteId, ServicoId, DataAtendimento, Horario) VALUES (?, ?, ?, ?)",
      [ClienteId, ServicoId, DataAtendimento, Horario],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve({ id: results.insertId, ...appointmentData });
      }
    );
  });
};

exports.updateAppointment = (id, appointmentData) => {
  const { ClienteId, ServicoId, DataAtendimento, Horario } = appointmentData;
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE agendamentos SET ClienteId = ?, ServicoId = ?, DataAtendimento = ?, Horario = ? WHERE Id = ?",
      [ClienteId, ServicoId, DataAtendimento, Horario, id],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(appointmentData);
      }
    );
  });
};

exports.deleteAppointment = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM agendamentos WHERE Id = ?",
      [id],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      }
    );
  });
};

exports.getAppointmentsByClientId = (ClienteId) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM agendamentos WHERE ClienteId = ?",
      [ClienteId],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      }
    );
  });
};
