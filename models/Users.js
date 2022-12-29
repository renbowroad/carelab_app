const db = require("../config/db");

// DBにアクセスしてデータを取ってくる
const Users = {
  /**
   * @param {string} id
   */
  findById(id) {
    const query = `SELECT * FROM users WHERE users.id = ?`;

    return new Promise((resolve, reject) => {
      db.query(query, [id], (err, result) => {
        if (err) reject(err);
        if (result.length < 1) reject("データが見つかリませんでした");

        resolve(result[0]);
      });
    });
  },

  findAll() {
    const query = `SELECT * FROM users`;

    return new Promise((resolve, reject) => {
      db.query(query, null, (err, result) => {
        if (err) reject(err);

        resolve(result);
      });
    });
  },
};

module.exports = Users;