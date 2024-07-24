const jwt = require("jsonwebtoken");
const { customer: Customer } = require("../../../models");
const { comparePassword } = require("../../../core/function");
const secretKey = process.env.SECRET_KEY;
require("dotenv").config();
async function login(req, res) {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({
      where: { email },
    });
    const passwordHash = await comparePassword(
      password,
      customer.dataValues.password
    );
    if (passwordHash) {
      if (customer) {
        const payload = {
          id_customer: customer.id_customer,
          email: customer.email,
          verifikasi: customer.verifikasi,
          nama_lengkap : customer.nama_lengkap
        };
        if (customer.verifikasi === "T") {
          return res
            .status(400)
            .json({
              code: 400,
              message:
                "user belum verifikasi, silahkan verifikasi terlebih dahulu",
            });
        }
        const token = jwt.sign(payload, secretKey, { expiresIn: "3d" });

        res.cookie("token", token, {
          httpOnly: true,
          // secure: process.env.NODE_ENV === 'production',
          sameSite: "strict",
          maxAge: 3 * 24 * 60 * 60 * 1000,
        });

        res.json({
          // customer,
          status: 200,
          message: "Login berhasil",
        });
      } else {
        res.status(401).json({
          status: 401,
          message: "Username atau password salah",
        });
      }
    } else {
      res.status(401).json({
        status: 401,
        message: "Username atau password salah",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
}

module.exports = { login };