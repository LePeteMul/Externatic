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

  findApplicationByUser(id) {
    return this.database.query(
      `select application.candidate_id, application.id as application_id,application.offer_id ,application.company_id, application.status_id ,status.id as status_id,status.status_name, offer.id as offer_id, offer.company_id, offer.job, offer.date, offer.contract_id, offer.city_job, contract.id, contract.contract_type, company.company_name, company.id as company_id, company.logo from  ${this.table} 
    INNER JOIN offer ON application.offer_id = offer.id
    INNER JOIN contract ON offer.contract_id = contract.id
    INNER JOIN company ON offer.company_id = company.id
    INNER JOIN status ON application.status_id = status.id
    where application.candidate_id = ?`,
      [id]
    );
  }
}

module.exports = ApplicationManager;
