const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  insert(favorite) {
    return this.database.query(
      `insert into ${this.table} (candidate_id, offer_id) values (?, ?)`,
      [favorite.candidate_id, favorite.offer_id]
    );
  }
}

module.exports = FavoriteManager;
