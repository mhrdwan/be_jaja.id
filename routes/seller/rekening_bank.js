var express = require('express');
const authenticateJWT = require('../../middleware/auth');
const { listRekeningBank, detailRekeningBank, updateRekeningBank, deleteRekeningBank } = require('../../controllers/seller/rekening_bank');
var router = express.Router();

router.get("/get-rekening", authenticateJWT, listRekeningBank);
router.get("/detail-rekening", authenticateJWT, detailRekeningBank);
router.post("/update-rekening", authenticateJWT, updateRekeningBank);
router.post("/delete-rekening", authenticateJWT, deleteRekeningBank);


module.exports = router;