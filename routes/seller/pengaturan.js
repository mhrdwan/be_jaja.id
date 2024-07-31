var express = require('express');
const authenticateJWT = require('../../middleware/auth');
const { informasiProfile, updateProfile, lokasi } = require('../../controllers/seller/pengaturan_roko_controller');
var router = express.Router();

router.get("/get-informasi-profile", authenticateJWT, informasiProfile);
router.post("/update-informasi-profile", authenticateJWT, updateProfile);
router.get("/lokasi", authenticateJWT, lokasi);


module.exports = router;