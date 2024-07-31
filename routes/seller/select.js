var express = require('express');
const authenticateJWT = require('../../middleware/auth');
const { selectWilayah } = require('../../controllers/seller/select_controller');
var router = express.Router();

router.get("/get-wilayah", authenticateJWT, selectWilayah);

module.exports = router;