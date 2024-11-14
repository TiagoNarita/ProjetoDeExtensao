const db = require("../config/dbConn");

exports.getAllClients = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM clientes", (error, results) => {
      console.log(error);
      console.log(results);
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

exports.getClientById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM clientes WHERE id = ?", [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results[0]);
    });
  });
};

exports.createClient = (clientData) => {
  return new Promise((resolve, reject) => {
    const { name, cpf, phone, email } = clientData;
    db.query(
      "INSERT INTO clientes (Nome, Cpf, Telefone, Email) VALUES (?, ?, ?, ?)",
      [name, cpf, phone, email],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve({ id: results.insertId, ...clientData });
      }
    );
  });
};

// Update an existing client
exports.updateClient = (id, clientData) => {
  return new Promise((resolve, reject) => {
    const { name, cpf, phone, email } = clientData;
    db.query(
      "UPDATE clientes SET Nome = ?,Cpf = ?, Email = ?, Telefone = ? WHERE id = ?",
      [name, cpf, email, phone, id],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve({ id, ...clientData });
      }
    );
  });
};

// // Delete a client
exports.deleteClient = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM clientes WHERE id = ?", [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results.affectedRows > 0);
    });
  });
};
