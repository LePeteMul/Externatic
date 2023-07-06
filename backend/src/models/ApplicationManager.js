const AbstractManager = require("./AbstractManager");

class ApplicationManager extends AbstractManager {
  constructor() {
    super({ table: "application" });
  }

  insert(application) {
    return this.database.query(
      `insert into ${this.table} (candidate_id, offer_id, company_id, status_id) values (?, ?, ?, 1)`,
      [application.candidate_id, application.offer_id, application.company_id]
    );
  }

  update(application) {
    return this.database.query(
      `update ${this.table} set status_id = ? where id = ?`,
      [application.status_id, application.id]
    );
  }

  updateStatusOfApplication(application) {
    return this.database.query(
      `UPDATE ${this.table} 
      SET status_id = ?
      WHERE ${this.table}.id = ?
      AND offer_id = ?;`,
      [application.status, application.id, application.offer_id]
    );
  }
}

module.exports = ApplicationManager;
