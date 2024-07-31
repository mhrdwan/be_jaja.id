var express = require("express");

const authenticateJWT = require("../../middleware/auth");
const { detailSaldo } = require("../../controllers/seller/dompetku_controller");
var router = express.Router();

router.get(`/detail-saldo`, authenticateJWT, detailSaldo);
module.exports = router;
