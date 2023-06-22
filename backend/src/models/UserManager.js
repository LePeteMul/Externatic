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
      `update ${this.table} set gender = ?, lastname = ?, firstname = ?, email = ?, phone = ?, city = ?, cv = ?, profil_picture = ?,  password = ?, pref_contract where id = ?`,
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
}

module.exports = UserManager;
