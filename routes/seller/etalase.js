var express = require("express");
const {
  getEtalase,
  getDetailEtalase,
  updateEtalase,
  deleteEtalase,
} = require("../../controllers/seller/etalase_controller");
const authenticateJWT = require("../../middleware/auth");
var router = express.Router();

router.get(`/getetalase`, authenticateJWT, getEtalase);
router.get(`/detail-etalase`, authenticateJWT, getDetailEtalase);
router.post(`/update-etalase`, authenticateJWT, updateEtalase);
router.post(`/delete-etalase`, authenticateJWT, deleteEtalase);
module.exports = router;
