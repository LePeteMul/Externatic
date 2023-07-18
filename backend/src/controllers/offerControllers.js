const models = require("../models");

const browse = (req, res) => {
  models.offer
    .findAllwithdetails()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.offer
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const offer = req.body;

  // TODO validations (length, format...)

  offer.id = parseInt(req.params.id, 10);

  models.offer
    .update(offer)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const {
    company_id,
    job,
    date,
    remote,
    contract_id,
    min_salary,
    max_salary,
    description,
    prerequisites,
    city_job,
    department,
  } = req.body;
  const { tech_name } = req.body;

  // TODO validations (length, format...)

  models.offer
    .insert({
      company_id,
      job,
      date,
      remote,
      contract_id,
      min_salary,
      max_salary,
      description,
      prerequisites,
      city_job,
      department,
    })
    .then(([result]) => {
      models.offer
        .insertTechnoForOffer(result.insertId, parseInt(tech_name))
        .then(() => res.status(200).send("bouh"));
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.offer
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOfferByCriteria = (req, res) => {
  const search = req.query;

  models.offer
    .findOffer(search)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOfferDetails = (req, res) => {
  models.offer
    .findOfferDetails(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getJobList = (req, res) => {
  models.offer
    .findJobList()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const findOffersByCompany = (req, res) => {
  const companyId = req.params.id;
  models.offer
    .OffersListCompany(companyId)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getCities = (req, res) => {
  models.offer
    .findCities()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  getOfferByCriteria,
  getJobList,
  getOfferDetails,
  findOffersByCompany,
  getCities,
};
