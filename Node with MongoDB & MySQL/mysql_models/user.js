const connection = require("../connection");

function saveUser(username, password) {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    connection.query(sql, [username, password], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}
function deleteUser(userId) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM users WHERE id = ?";
      connection.query(sql, [userId], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  
module.exports = {saveUser,deleteUser};
