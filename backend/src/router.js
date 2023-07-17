const express = require("express");

const router = express.Router();
const { hashPassword } = require("./services/auth");
const { verifyPassword, verifyCompanyPassword } = require("./services/auth");

/* const { verifyToken } = require("./services/auth"); */
/* A ajouter sur les routes concernées */

const applicationControllers = require("./controllers/applicationControllers");

router.get("/api/application", applicationControllers.browse);
router.get("/api/application/:id", applicationControllers.read);
router.get(
  "/api/applicationByUser/:id",
  applicationControllers.getapplicationByUser
);
router.put("/api/application/:id", applicationControllers.edit);
router.post("/api/application", applicationControllers.add);
router.delete("/api/application/:id", applicationControllers.destroy);

const companyControllers = require("./controllers/companyControllers");

router.get("/api/company", companyControllers.browse);
router.get("/api/company/:id", companyControllers.read);
router.put("/api/company/:id", companyControllers.edit);
router.post("/api/company/register", hashPassword, companyControllers.add);
router.delete("/api/company/:id", companyControllers.destroy);
router.put("/api/picture/company/edit", companyControllers.changePicture);
router.put("/api/pass/company/edit", companyControllers.changePassword);
router.put(
  "/api/presentation/company/edit",
  companyControllers.changePresentation
);

router.post(
  "/api/company/login",
  companyControllers.getCompanyByEmailWithPasswordAndPassToNext,
  verifyCompanyPassword
);

router.put(
  "/api/company/edition/resetpassword",
  hashPassword,
  companyControllers.editPassword
);

const contractControllers = require("./controllers/contractControllers");

router.get("/api/contract", contractControllers.browse);
router.get("/api/contract/:id", contractControllers.read);
router.put("/api/contract/:id", contractControllers.edit);
router.post("/api/contract", contractControllers.add);
router.delete("/api/contract/:id", contractControllers.destroy);

const favoriteControllers = require("./controllers/favoriteControllers");

router.get("/api/favorite", favoriteControllers.browse);
router.get(
  "/api/favorite/:param1/:param2",
  favoriteControllers.getByUserAndOffer
);
router.get("/api/FavoriteByUser/:id", favoriteControllers.getFavoriteByUser);
router.post("/api/favorite", favoriteControllers.add);
router.delete(
  "/api/favorite/:param1/:param2",
  favoriteControllers.cancelByUserAndOffer
);

const offerControllers = require("./controllers/offerControllers");

router.get("/api/offer", offerControllers.browse);
router.get("/api/offerByCriteria", offerControllers.getOfferByCriteria);
router.get("/api/offer/jobList", offerControllers.getJobList);
router.get("/api/offer/:id", offerControllers.read);
router.get("/api/offerDetails/:id", offerControllers.getOfferDetails);
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
// router.get("/api/user/preference/:id", userControllers.getPreference);
router.put("/api/user/:id", userControllers.editById);
router.post("/api/user/register", hashPassword, userControllers.add);
router.delete("/api/user/:id", userControllers.destroy);

// Route to get application by offer id
router.get("/api/application/byOfferId/:id", userControllers.getAppliByOfferId);

router.post(
  "/api/user/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Route to update the status for the application
router.put(
  "/api/application/:applicationId/status",
  applicationControllers.editStatus
);

const mailControllers = require("./controllers/mailControllers");

router.post("/api/email", mailControllers.sendContactMail);

router.post("/api/email/contact", mailControllers.sendContactMessageMail);
router.post("/api/email/resetpassword", mailControllers.sendPasswordResetMail);

router.post(
  "/api/email/company/resetpassword",
  mailControllers.sendCompanyPasswordResetMail
);

router.get("/api/email/user/:mail", userControllers.getUserByEmail);

// Route to get all the offers with details
router.get("/api/offerDetailss/:id", companyControllers.offersListcompany);

// router.get("/api/offersByCompany/:id", offerControllers.findOffersByCompany);

module.exports = router;
