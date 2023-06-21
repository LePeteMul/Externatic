const express = require("express");

const router = express.Router();

const applicationControllers = require("./controllers/applicationControllers");

router.get("/application", applicationControllers.browse);
router.get("/application/:id", applicationControllers.read);
router.put("/application/:id", applicationControllers.edit);
router.post("/application", applicationControllers.add);
router.delete("/application/:id", applicationControllers.destroy);

const companyControllers = require("./controllers/companyControllers");

router.get("/company", companyControllers.browse);
router.get("/company/:id", companyControllers.read);
router.put("/company/:id", companyControllers.edit);
router.post("/company", companyControllers.add);
router.delete("/company/:id", companyControllers.destroy);

const contractControllers = require("./controllers/contractControllers");

router.get("/contract", contractControllers.browse);
router.get("/contract/:id", contractControllers.read);
router.put("/contract/:id", contractControllers.edit);
router.post("/contract", contractControllers.add);
router.delete("/contract/:id", contractControllers.destroy);

const favoriteControllers = require("./controllers/favoriteControllers");

router.get("/favorite", favoriteControllers.browse);
router.get("/favorite/:id", favoriteControllers.read);
router.post("/favorite", favoriteControllers.add);
router.delete("/favorite/:id", favoriteControllers.destroy);

const offerControllers = require("./controllers/offerControllers");

router.get("/offer", offerControllers.browse);
router.get("/offer/:id", offerControllers.read);
router.put("/offer/:id", offerControllers.edit);
router.post("/offer", offerControllers.add);
router.delete("/offer/:id", offerControllers.destroy);

const statusControllers = require("./controllers/statusControllers");

router.get("/status", statusControllers.browse);
router.get("/status/:id", statusControllers.read);
router.put("/status/:id", statusControllers.edit);
router.post("/status", statusControllers.add);
router.delete("/status/:id", statusControllers.destroy);

const technoControllers = require("./controllers/technoControllers");

router.get("/techno", technoControllers.browse);
router.get("/techno/:id", technoControllers.read);0.
router.put("/techno/:id", technoControllers.edit);
router.post("/techno", technoControllers.add);
router.delete("/techno/:id", technoControllers.destroy);

const userControllers = require("./controllers/userControllers");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);
router.delete("/user/:id", userControllers.destroy);

module.exports = router;
