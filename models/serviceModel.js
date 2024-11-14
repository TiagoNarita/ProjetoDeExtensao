// models/serviceModel.js

const db = require("../config/dbConn");

exports.getAllServices = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM servicos", (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

exports.getServiceById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM servicos WHERE id = ?", [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results[0]);
    });
  });
};

exports.createService = (serviceData) => {
  const { Nome, Preco } = serviceData; // Somente os campos Nome e Preço
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO servicos (Nome, Preco) VALUES (?, ?)",
      [Nome, Preco],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      }
    );
  });
};

exports.updateService = (id, serviceData) => {
  const { Nome, Preco } = serviceData;
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE servicos SET Nome = ?, Preco = ? WHERE id = ?",
      [Nome, Preco, id],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve({ id, ...serviceData });
      }
    );
  });
};

exports.deleteService = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM servicos WHERE id = ?", [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};
