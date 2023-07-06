const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  insert(company) {
    return this.database.query(
      `insert into ${this.table} (company_name, email,password, phone, logo) values (?, ?, ?, ?, ?)`,
      [
        company.company_name,
        company.email,
        company.password,
        company.phone,
        company.logo,
      ]
    );
  }

  update(company) {
    return this.database.query(
      `update ${this.table} set company_name = ?, email = ?, password = ?, phone = ?, logo = ?, presentation = ? where id = ?`,
      [
        company.company_name,
        company.email,
        company.password,
        company.phone,
        company.logo,
        company.presentation,
        company.id,
      ]
    );
  }

  findAllOffersWithDetails() {
    return this.database.query(
      `
    SELECT ${this.table}.logo,${this.table}.company_name, offer.date, offer.job, contract.contract_type, offer.city_job 
    FROM ${this.table}
    INNER JOIN offer ON offer.id = ${this.table}.id
    INNER JOIN contract ON offer.id = contract.id;
    `
    );
  }
}

module.exports = CompanyManager;
