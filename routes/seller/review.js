const express = require("express");
const { validateCreateUser } = require("../../middleware/validasi/createUser");
const authenticateJWT = require("../../middleware/auth");
const { listRating,detailRating } = require("../../controllers/seller/review_controller");
const router = express.Router();

router.get("/get-list-review", authenticateJWT, listRating);
router.get("/get-detail-list-review", authenticateJWT, detailRating);

module.exports = router;
