const express = require("express");
const authenticateJWT = require("../../middleware/auth");
const { listProdukReport, detailProdukReport } = require("../../controllers/seller/report_controller");
const router = express.Router();

router.get("/get-list-report", authenticateJWT, listProdukReport);
router.get("/get-detail-produk-report", authenticateJWT, detailProdukReport);
module.exports = router;
