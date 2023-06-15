const AbstractManager = require("./AbstractManager");

class ContractManager extends AbstractManager {
  constructor() {
    super({ table: "contract" });
  }

  insert(contract) {
    return this.database.query(
      `insert into ${this.table} (contract_type) values (?)`,
      [contract.contract_type]
    );
  }

  update(contract) {
    return this.database.query(
      `update ${this.table} set contract_type = ? where id = ?`,
      [contract.contract_type, contract.id]
    );
  }
}

module.exports = ContractManager;
