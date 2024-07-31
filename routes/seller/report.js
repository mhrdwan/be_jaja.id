const express = require("express");
const authenticateJWT = require("../../middleware/auth");
const { listProdukReport, detailProdukReport } = require("../../controllers/seller/report");
const router = express.Router();

router.get("/get-list-review", authenticateJWT, listProdukReport);
router.get("/get-detail-produk-report", authenticateJWT, detailProdukReport);
module.exports = router;
