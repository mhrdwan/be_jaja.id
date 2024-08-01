const jwt = require('jsonwebtoken');
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

function authenticateJWT(req, res, next) {
  // Ambil token dari cookies
  const token = req.cookies.token;

  if (token) {
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ status: 403, message: 'Token tidak valid' });
      }

      req.user = user; // Menyimpan informasi pengguna di request object
      next(); // Lanjutkan ke middleware berikutnya atau route handler
    });
  } else {
    res.status(401).json({ status: 401, message: 'Autentikasi diperlukan' });
  }
}

module.exports = authenticateJWT;
