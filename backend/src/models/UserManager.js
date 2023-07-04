const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (gender, lastname, firstname, email, password, admin) values (?, ?, ?, ?, ?, ?)`,
      [user.gender, user.lastname, user.firstname, user.email, user.password, 0]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set gender = ?, lastname = ?, firstname = ?, email = ?, phone = ?, city = ?, cv = ?, profil_picture = ?,  password = ?, pref_contract = ? where id = ?`,
      [
        user.gender,
        user.lastname,
        user.firstname,
        user.email,
        user.phone,
        user.city,
        user.cv,
        user.profil_picture,
        user.password,
        user.pref_contract,
        user.id,
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

  findAllCandidate() {
    return this.database
      .query(
        `select id, lastname, firstname, email, profil_picture from  ${this.table} where admin = 0`
      )
      .catch((err) => {
        throw err;
      });
  }

  findByid(id) {
    return this.database.query(
      `select id, gender, lastname, firstname, email, phone, city, cv, admin, profil_picture from  ${this.table} where id = ?`,
      [id]
    );
  }

  // Query to get application by offer id
  findApplicationByOffer(id) {
    return this.database.query(
      `SELECT user.firstname,user.lastname,user.profil_picture, user.email, offer.job, contract.contract_type, company.company_name, status.status_name, offer.city_job
    from  ${this.table} 
    INNER JOIN application ON user.id = application.candidate_id
    INNER JOIN offer ON application.offer_id = offer.id
    INNER JOIN contract ON offer.contract_id = contract.id
    INNER JOIN company ON offer.company_id = company.id
    INNER JOIN status ON application.status_id = status.id
    where offer.id = ?`,
      [id]
    );
  }
}

module.exports = UserManager;
