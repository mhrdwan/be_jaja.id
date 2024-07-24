var express = require('express');
const { listPromoToko, detailPromoToko, updatePromo, deleteVocher } = require('../../controllers/seller/voucher_toko_controller');
const authenticateJWT = require('../../middleware/auth');
var router = express.Router();

router.get('/list-voucher', authenticateJWT,listPromoToko);
router.get('/detail-voucher', authenticateJWT,detailPromoToko);
router.post('/update-voucher', authenticateJWT,updatePromo);
router.post('/delete-voucher', authenticateJWT,deleteVocher);

module.exports = router;