const models = require("../models");

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
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
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
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

const editById = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);

  models.user
    .updateById(user)
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
  const user = req.body;

  // TODO validations (length, format...)

  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/api/user/${result.insertId}`).sendStatus(201);
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
  models.user
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

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  models.user

    .findByMail(email)
    .then(([user]) => {
      if (user[0] != null) {
        req.user = user[0];
        console.info("user identified by email");
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

const getUserByEmail = (req, res) => {
  const { email } = req.body;

  models.user
    .findByMail(email)
    .then(([user]) => {
      if (user[0] != null) {
        req.user = user[0];
        console.info(user);
        res.status(200).send(user[0]);
      } else {
        res.status(404).send("null");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(" error retrieving data from database ");
    });
};

const getCandidate = (req, res) => {
  models.user
    .findAllCandidate()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getById = (req, res) => {
  models.user
    .findByid(req.params.id)
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

// Getting application by offer id
const getAppliByOfferId = (req, res) => {
  models.user
    .findApplicationByOffer(req.params.id)
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

const editPassword = (req, res) => {
  const { email, password } = req.body;
  console.info(email, password);

  models.user
    .updatePassword(email, password)
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

/* const editPreference = (req, res) => {
  const user = req.body;
  id = parseInt(req.params.id, 10);

  models.user
    .updatePreference(user)
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

const getPreference = (req, res) => {
  models.user
    .findPreference(req.params.id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
}; */

module.exports = {
  browse,
  read,
  edit,
  editById,
  add,
  destroy,
  getUserByEmailWithPasswordAndPassToNext,
  getCandidate,
  getById,
  getAppliByOfferId,
  getUserByEmail,
  editPassword,
};
