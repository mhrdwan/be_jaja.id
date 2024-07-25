var express = require('express');
const authenticateJWT = require('../../middleware/auth');
const { produkDetail, getProdukUser, deleteProduk, updateProduk, lisDiskonToko } = require('../../controllers/seller/produk_controller');
var router = express.Router();

router.get("/get-produkuser", authenticateJWT, getProdukUser);
router.get("/detail-produk", authenticateJWT,produkDetail);
router.post("/delete-produk", authenticateJWT,deleteProduk);
router.post("/update-produk", authenticateJWT,updateProduk);
router.get("/list-diskon-produk", authenticateJWT,lisDiskonToko);

module.exports = router;