const AbstractManager = require("./AbstractManager");

class TechnoManager extends AbstractManager {
  constructor() {
    super({ table: "techno" });
  }

  insert(techno) {
    return this.database.query(
      `insert into ${this.table} (tech_name) values (?)`,
      [techno.tech_name]
    );
  }

  update(techno) {
    return this.database.query(
      `update ${this.table} set tech_name = ? where id = ?`,
      [techno.tech_name, techno.id]
    );
  }
}

module.exports = TechnoManager;
