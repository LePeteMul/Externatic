const AbstractManager = require("./AbstractManager");

class StatusManager extends AbstractManager {
  constructor() {
    super({ table: "status" });
  }

  insert(status) {
    return this.database.query(
      `insert into ${this.table} (status_name) values (?)`,
      [status.status_name]
    );
  }

  update(status) {
    return this.database.query(
      `update ${this.table} set status_name = ? where id = ?`,
      [status.status_name, status.id]
    );
  }
}

module.exports = StatusManager;
