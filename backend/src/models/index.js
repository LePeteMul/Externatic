require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  multipleStatements: true,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers

const models = {};

const ApplicationManager = require("./ApplicationManager");
const CompanyManager = require("./CompanyManager");
const ContractManager = require("./ContractManager");
const FavoriteManager = require("./FavoriteManager");
const OfferManager = require("./OfferManager");
const StatusManager = require("./StatusManager");
const TechnoManager = require("./TechnoManager");
const UserManager = require("./UserManager");

// Initialisation des managers
models.application = new ApplicationManager();
models.company = new CompanyManager();
models.contract = new ContractManager();
models.favorite = new FavoriteManager();
models.offer = new OfferManager();
models.status = new StatusManager();
models.techno = new TechnoManager();
models.user = new UserManager();

// Définition des bases de données en fonction des managers
models.application.setDatabase(pool);
models.company.setDatabase(pool);
models.contract.setDatabase(pool);
models.favorite.setDatabase(pool);
models.offer.setDatabase(pool);
models.status.setDatabase(pool);
models.techno.setDatabase(pool);
models.user.setDatabase(pool);

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
