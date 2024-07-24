var express = require('express');
const authenticateJWT = require('../../middleware/auth');
const { produkDetail, getProdukUser, deleteProduk, updateProduk } = require('../../controllers/seller/produk_controller');
var router = express.Router();

router.get("/get-produkuser", authenticateJWT, getProdukUser);
router.get("/detail-produk", authenticateJWT,produkDetail);
router.post("/delete-produk", authenticateJWT,deleteProduk);
router.post("/update-produk", authenticateJWT,updateProduk);

module.exports = router;