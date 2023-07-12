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

  findFavoriteByUser(id) {
    return this.database.query(
      `select favorite.candidate_id, favorite.offer_id as favoffer_id,  offer.id as offer_id, offer.company_id, offer.job, offer.date, offer.contract_id, offer.city_job, contract.id, contract.contract_type, company.company_name, company.id as company_id, company.logo from  ${this.table} 
    INNER JOIN offer ON favorite.offer_id = offer.id
    INNER JOIN contract ON offer.contract_id = contract.id
    INNER JOIN company ON offer.company_id = company.id
    where favorite.candidate_id = ?`,
      [id]
    );
  }

  findByUserAndOffer(candidateId, offerId) {
    return this.database.query(
      `select * from  ${this.table} where candidate_id = ? AND offer_id = ?`,
      [candidateId, offerId]
    );
  }

  deleteByUserAndOffer(candidateId, offerId) {
    return this.database.query(
      `delete from ${this.table} where candidate_id = ? AND offer_id = ?`,
      [candidateId, offerId]
    );
  }
}

module.exports = FavoriteManager;
