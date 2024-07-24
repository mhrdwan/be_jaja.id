var express = require('express');
const { getListOrders } = require('../../controllers/seller/list_controller');
var router = express.Router();

router.get('/', getListOrders);

module.exports = router;