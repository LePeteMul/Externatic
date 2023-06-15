const AbstractManager = require("./AbstractManager");

class ApplicationManager extends AbstractManager {
  constructor() {
    super({ table: "application" });
  }

  insert(application) {
    return this.database.query(
      `insert into ${this.table} (candidate_id, application_id, status_id) values (?, ?, ?)`,
      [
        application.candidate_id,
        application.application_id,
        application.status_id,
      ]
    );
  }

  update(application) {
    return this.database.query(
      `update ${this.table} set status_id = ? where id = ?`,
      [application.status_id, application.id]
    );
  }
}

module.exports = ApplicationManager;
