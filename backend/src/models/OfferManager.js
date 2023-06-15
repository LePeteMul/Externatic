const AbstractManager = require("./AbstractManager");

class OfferManager extends AbstractManager {
  constructor() {
    super({ table: "Offer" });
  }

  insert(offer) {
    return this.database.query(
      `insert into ${this.table} (company_id, job, date, remote, contract_id, min_salary, max_salary,
        description, prerequisites, city_job, department) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        offer.company_id,
        offer.job,
        offer.date,
        offer.remote,
        offer.contract_id,
        offer.min_salary,
        offer.max_salary,
        offer.description,
        offer.prerequisistes,
        offer.city_job,
        offer.department,
      ]
    );
  }

  update(offer) {
    return this.database.query(
      `update ${this.table} set company_id = ?, job = ?, date = ?, remote = ?, contract_id = ?, min_salary = ?, max_salary = ?,
      description = ?, prerequisites = ?, city_job = ?, department = ? where id = ?`,
      [
        offer.company_id,
        offer.job,
        offer.date,
        offer.remote,
        offer.contract_id,
        offer.min_salary,
        offer.max_salary,
        offer.description,
        offer.prerequisistes,
        offer.city_job,
        offer.id,
      ]
    );
  }
}

module.exports = OfferManager;
