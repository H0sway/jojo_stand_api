// Import the database
const db = require('../db/config');

// Stand model class, sends queries to the database
class Stand {
  findAll() {
    return db.query(`SELECT * FROM stands`);
  }
  findById(id) {
    return db.oneOrNone(
      `
      SELECT * FROM stands
      WHERE id = $1
      `,
      [id]
    );
  }
  searchByName(name) {
    return db.query(
      `
      SELECT * FROM stands
      WHERE name LIKE $1
      `,
      [name]
    );
  }
  searchByUser(stand_user) {
    return db.query(
      `
      SELECT * FROM stands
      WHERE stand_user LIKE $1
      `,
      [stand_user]
    );
  }
}

module.exports = Stand;
