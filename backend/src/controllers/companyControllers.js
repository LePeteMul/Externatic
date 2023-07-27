const models = require("../models");

const browse = (req, res) => {
  models.company
    .findAllWithoutPassword()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.company
    .findByIdWithoutPassword(req.params.id)
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
  const company = req.body;

  // TODO validations (length, format...)

  company.id = parseInt(req.params.id, 10);

  models.company
    .update(company)
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

const changePicture = (req, res) => {
  const { profilepic, id } = req.body;
  console.error(req.body);

  models.company
    .updateProfilePic(profilepic, id)
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

const changePassword = (req, res) => {
  const { password, email } = req.body;
  console.error(req.body);

  models.company
    .updatePassword(password, email)
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

const changePresentation = (req, res) => {
  const { presentation } = req.body;
  console.error(req.body);
  console.warn("presentation dans update = ", presentation);
  models.company
    .updatePresentation(presentation, req.params.id)
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
  const company = req.body;

  // TODO validations (length, format...)

  models.company
    .insert(company)
    .then(([result]) => {
      res.location(`/api/company/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "ER_DUP_ENTRY") {
        res.status(400).send("Email deja utilisé");
      } else {
        res.status(500).send("Internal server error");
      }
    });
};

const destroy = (req, res) => {
  models.company
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

const offersListcompany = (req, res) => {
  console.info("ici");

  models.company
    .findAllOffersWithDetails(req.params.id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getCompanyByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  models.company

    .findByMail(email)
    .then(([company]) => {
      if (company[0] != null) {
        req.company = company[0];
        console.info("company identified by email");
        next();
      } else {
        res.status(401).send("Adresse mail incorrecte");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(" error retrieving data from database ");
    });
};
const addLogo = async (req, res) => {
  const url = process.env.BACKEND_URL_IMAGE + req.fname;

  models.company
    .addLogo(url, req.params.id)
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
  offersListcompany,
  changePicture,
  changePassword,
  changePresentation,
  getCompanyByEmailWithPasswordAndPassToNext,
  addLogo,
};
