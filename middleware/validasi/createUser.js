const { body, validationResult } = require('express-validator');

const validateCreateUser = [
  body('pin').notEmpty().withMessage('PIN is required'),
  body('referral_code').notEmpty().withMessage('Referral code is required'),
  body('first_name').notEmpty().withMessage('First name is required'),
  body('last_name').notEmpty().withMessage('Last name is required'),
  body('nama_lengkap').notEmpty().withMessage('Nama lengkap is required'),
  body('email').isEmail().withMessage('Email is invalid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('username').notEmpty().withMessage('Username is required'),
  // Add more validations as needed
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Proses error untuk hanya menyertakan pesan
      const processedErrors = errors.array().map(err => err.msg);
      return res.status(400).json({ errors: processedErrors });
    }
    next();
  }
];

module.exports = {
  validateCreateUser,
};
