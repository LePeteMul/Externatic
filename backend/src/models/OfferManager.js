const AbstractManager = require("./AbstractManager");

class OfferManager extends AbstractManager {
  constructor() {
    super({ table: "Offer" });
  }

  insert(offer) {
    return this.database.query(
      `insert into ${this.table} (company_id, job, date, remote, contract_id, min_salary, max_salary,
        description, prerequisites, city_job, department) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `,
      [
        offer.company_id,
        offer.job,
        offer.date,
        offer.remote,
        offer.contract_id,
        offer.min_salary,
        offer.max_salary,
        offer.description,
        offer.prerequisites,
        offer.city_job,
        offer.department,
        offer.tech_name,
      ]
    );
  }

  insertTechnoForOffer(offer_id, techno_id) {
    return this.database.query(
      "insert into offer_techno (techno_id, offer_id) values (?, ?)",
      [techno_id, offer_id]
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

  findOffer(search) {
    let query = `
      SELECT offer.id , company.id as companyid, company.company_name, offer.job, offer.date, offer.remote, contract.contract_type, offer.min_salary, offer.max_salary, offer.description, offer.prerequisites, offer.city_job, offer.department, company.logo, company.presentation, techno.techno_name
      FROM offer
      LEFT JOIN offer_techno ON offer.id = offer_techno.offer_id
      LEFT JOIN techno ON offer_techno.techno_id = techno.id
      LEFT JOIN contract ON offer.contract_id = contract.id
      LEFT JOIN company ON offer.company_id = company.id`;

    let params = [];

    if (search.job !== "" && search.contract !== "" && search.city !== "") {
      query += `
        WHERE offer.job LIKE ? 
        AND offer.contract_id = ? 
        AND offer.city_job = ?
        ORDER BY offer.date DESC`;
      params = [search.job, search.contract, search.city];
    } else if (
      search.job !== "" &&
      search.contract !== "" &&
      search.city === ""
    ) {
      query += `
        WHERE offer.job LIKE ?  
        AND offer.contract_id = ?
        ORDER BY offer.date DESC`;
      params = [search.job, search.contract];
    } else if (
      search.job !== "" &&
      search.contract === "" &&
      search.city === ""
    ) {
      query += `
        WHERE offer.job LIKE ?
        ORDER BY offer.date DESC`;
      params = [search.job];
    } else if (
      search.job !== "" &&
      search.contract === "" &&
      search.city !== ""
    ) {
      query += `
        WHERE offer.job LIKE ? 
        AND offer.city_job = ?
        ORDER BY offer.date DESC`;
      params = [search.job, search.city];
    } else if (
      search.job === "" &&
      search.contract !== "" &&
      search.city === ""
    ) {
      query += `
        WHERE offer.contract_id = ?
        ORDER BY offer.date DESC`;
      params = [search.contract];
    } else if (
      search.job === "" &&
      search.contract !== "" &&
      search.city !== ""
    ) {
      query += `
        WHERE offer.contract_id = ? 
        AND offer.city_job = ?
        ORDER BY offer.date DESC`;
      params = [search.contract, search.city];
    } else if (
      search.job === "" &&
      search.contract === "" &&
      search.city !== ""
    ) {
      query += `
        WHERE offer.city_job = ?
        ORDER BY offer.date DESC`;
      params = [search.city];
    }

    return this.database.query(query, params);
  }

  findOfferDetails(id) {
    return this.database.query(
      `SELECT offer.id, company.id as companyid, company.company_name, offer.job, offer.date, offer.remote, contract.contract_type, offer.min_salary, offer.max_salary, offer.description, offer.prerequisites, offer.city_job, offer.department, company.logo, company.presentation, techno.techno_name
    FROM offer
    LEFT JOIN offer_techno ON offer.id = offer_techno.offer_id
    LEFT JOIN techno ON offer_techno.techno_id = techno.id
    LEFT JOIN contract ON offer.contract_id = contract.id
    LEFT JOIN company ON offer.company_id = company.id where offer.id = ?`,
      [id]
    );
  }

  findJobList() {
    return this.database.query(
      `select DISTINCT job from  ${this.table} ORDER BY job ASC`
    );
  }

  OffersListCompany() {
    return this.database.query(
      `select ${this.table}.job, company.company_name ,${this.table}.id , ${this.table}.date, ${this.table}.city_job, contract.contract_type, company.logo
      from ${this.table}
      INNER JOIN company ON ${this.table}.id = company.id
      INNER JOIN contract ON ${this.table}.id = contract.id;
      `
    );
  }

  findCities() {
    return this.database.query(`select DISTINCT city_job from  ${this.table}`);
  }

  findAllwithdetails() {
    return this.database
      .query(`SELECT offer.id , company.id as companyid, company.company_name, offer.job, offer.date, offer.remote, contract.contract_type, offer.min_salary, offer.max_salary, offer.description, offer.prerequisites, offer.city_job, offer.department, company.logo, company.presentation, techno.techno_name
  FROM offer
  LEFT JOIN offer_techno ON offer.id = offer_techno.offer_id
  LEFT JOIN techno ON offer_techno.techno_id = techno.id
  LEFT JOIN contract ON offer.contract_id = contract.id
  LEFT JOIN company ON offer.company_id = company.id`);
  }
}

module.exports = OfferManager;
