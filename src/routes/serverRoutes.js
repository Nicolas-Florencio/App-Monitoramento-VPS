const express = require("express");
const router = express.Router();
const controller = require("../controllers/serverController");

router.post("/servers", controller.addServidor);
router.get("/servers", controller.getServidores);

module.exports = router;