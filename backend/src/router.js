const express = require("express");

const router = express.Router();
const { hashPassword } = require("./services/auth");
const { verifyPassword } = require("./services/auth");

/* const { verifyToken } = require("./services/auth"); */
/* A ajouter sur les routes concernées */

const applicationControllers = require("./controllers/applicationControllers");

router.get("/api/application", applicationControllers.browse);
router.get("/api/application/:id", applicationControllers.read);
router.put("/api/application/:id", applicationControllers.edit);
router.post("/api/application", applicationControllers.add);
router.delete("/api/application/:id", applicationControllers.destroy);

const companyControllers = require("./controllers/companyControllers");

router.get("/api/company", companyControllers.browse);
router.get("/api/company/:id", companyControllers.read);
router.put("/api/company/:id", companyControllers.edit);
router.post("/api/company/register", companyControllers.add);
router.delete("/api/company/:id", companyControllers.destroy);

const contractControllers = require("./controllers/contractControllers");

router.get("/api/contract", contractControllers.browse);
router.get("/api/contract/:id", contractControllers.read);
router.put("/api/contract/:id", contractControllers.edit);
router.post("/api/contract", contractControllers.add);
router.delete("/api/contract/:id", contractControllers.destroy);

const favoriteControllers = require("./controllers/favoriteControllers");

router.get("/api/favorite", favoriteControllers.browse);
router.get("/api/favorite/:id", favoriteControllers.read);
router.post("/api/favorite", favoriteControllers.add);
router.delete("/api/favorite/:id", favoriteControllers.destroy);

const offerControllers = require("./controllers/offerControllers");

router.get("/api/offer", offerControllers.browse);
router.get("/api/offer/:id", offerControllers.read);
router.put("/api/offer/:id", offerControllers.edit);
router.post("/api/offer", offerControllers.add);
router.delete("/api/offer/:id", offerControllers.destroy);

const statusControllers = require("./controllers/statusControllers");

router.get("/api/status", statusControllers.browse);
router.get("/api/status/:id", statusControllers.read);
router.put("/api/status/:id", statusControllers.edit);
router.post("/api/status", statusControllers.add);
router.delete("/api/status/:id", statusControllers.destroy);

const technoControllers = require("./controllers/technoControllers");

router.get("/api/techno", technoControllers.browse);
router.get("/api/techno/:id", technoControllers.read);
router.put("/api/techno/:id", technoControllers.edit);
router.post("/api/techno", technoControllers.add);
router.delete("/api/techno/:id", technoControllers.destroy);

const userControllers = require("./controllers/userControllers");

router.get("/api/user", userControllers.browse);
router.get("/api/user/candidats", userControllers.getCandidate);
router.get("/api/user/:id", userControllers.getById);
router.put("/api/user/:id", userControllers.edit);
router.post("/api/user/register", hashPassword, userControllers.add);
router.delete("/api/user/:id", userControllers.destroy);

// Route to get application by offer id
router.get("/api/application/byOfferId/:id", userControllers.getAppliByOfferId);

router.post(
  "/api/user/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

const mailControllers = require("./controllers/mailControllers");

router.post("/api/email", mailControllers.sendContactMail);

module.exports = router;
