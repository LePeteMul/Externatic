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

  findByMail(email) {
    return this.database
      .query(`SELECT * FROM ${this.table} WHERE email = ?`, [email])
      .catch((err) => {
        throw err;
      });
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

  updateProfilePic(logo, id) {
    return this.database.query(`update company set logo = ? where id = ?`, [
      logo,
      id,
    ]);
  }

  updatePassword(password, email) {
    console.info(password, email);
    return this.database.query(
      `update company set password = ? where email = ?`,
      [password, email]
    );
  }

  updatePresentation(presentation, id) {
    return this.database.query(
      `update company set presentation = ? where id = ?`,
      [presentation, id]
    );
  }

  findAllOffersWithDetails(id) {
    return this.database.query(
      `
      SELECT ${this.table}.company_name,${this.table}.logo, offer.id as offer_id, offer.date, offer.job, contract.contract_type, offer.city_job 
      FROM ${this.table}
      INNER JOIN offer ON offer.company_id = ${this.table}.id
      INNER JOIN contract ON offer.contract_id = contract.id
      WHERE ${this.table}.id = ?;
      `,
      [id]
    );
  }

  updateProfilePicture(company) {
    return this.database.query(
      `update ${this.table} , profil_picture = ? where id = ?`,
      [company.logo, company.id]
    );
  }

  addLogo(logo, id) {
    return this.database.query(
      `update ${this.table} set  logo = ? where id = ?`,
      [logo, id]
    );
  }
}

module.exports = CompanyManager;
