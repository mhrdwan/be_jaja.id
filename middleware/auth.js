const jwt = require('jsonwebtoken');
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ status: 403, message: 'Token tidak valid' });
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ status: 401, message: 'Autentikasi diperlukan' });
  }
}

module.exports = authenticateJWT;
