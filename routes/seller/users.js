const express = require("express");
const { validateCreateUser } = require("../../middleware/validasi/createUser");
const {
  createUser,
  getProdukUser,
  lupaPassword,
  verifKodeLupaPassword,
  updatePassword,
  verifEmailUser,
  createToko,
} = require("../../controllers/seller/user_controller");
const { login } = require("../../controllers/seller/auth/auth");
const authenticateJWT = require("../../middleware/auth");
const router = express.Router();

router.post("/createuser", createUser);
router.post("/create-toko", authenticateJWT,createToko);
router.post("/login", login);
router.post("/verif-kode-user", verifEmailUser);
router.post("/lupa-password", lupaPassword);
router.post("/verif-kode-lupa-password", verifKodeLupaPassword);
router.post("/update-password", updatePassword);

module.exports = router;
