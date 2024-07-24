var express = require("express");
const { getListOrders } = require("../../controllers/seller/list_controller");
const {
  getBrand,
  deleteBrand,
  updateBrand,
  getDetailBrand,
} = require("../../controllers/seller/brand_controller");
const authenticateJWT = require("../../middleware/auth");
var router = express.Router();

router.get(`/listbrand`, authenticateJWT, getBrand);
router.get(`/getdetail-brand`, authenticateJWT, getDetailBrand);
router.post(`/delete-brand`, authenticateJWT, deleteBrand);
router.post(`/update-brand`, authenticateJWT, updateBrand);

module.exports = router;
