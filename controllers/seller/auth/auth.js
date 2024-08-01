const jwt = require("jsonwebtoken");
const { customer: Customer, toko } = require("../../../models");
const { comparePassword } = require("../../../core/function");
const secretKey = process.env.SECRET_KEY;
require("dotenv").config();

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({
      where: { email },
    });

    if (!customer) {
      return res.status(401).json({
        status: 401,
        message: "Username atau password salah",
      });
    }

    const passwordHash = await comparePassword(
      password,
      customer.dataValues.password
    );

    const cekToko = await toko.findOne({
      where: { id_user: customer.id_customer },
    });

    if (passwordHash) {
      const payload = {
        id_customer: customer.id_customer,
        email: customer.email,
        verifikasi: customer.verifikasi,
        nama_lengkap: customer.nama_lengkap,
        id_toko: cekToko?.id_toko || null,
      };

      if (customer.verifikasi === "T") {
        return res.status(400).json({
          code: 400,
          message: "User belum verifikasi, silahkan verifikasi terlebih dahulu",
        });
      }

      const token = jwt.sign(payload, secretKey, { expiresIn: "3d" });

      // Mengatur cookie dengan token
      res.cookie("token", token, {
        httpOnly: true, // Mencegah akses cookie dari JavaScript di client-side
        secure: false, // Harus diatur ke false untuk localhost (tanpa HTTPS)
        sameSite: "strict", // Menghindari pengiriman cookie lintas situs
        maxAge: 3 * 24 * 60 * 60 * 1000, // Cookie berlaku selama 3 hari
      });

      res.status(200).json({
        status: 200,
        message: "Login berhasil",
        // token: token,
      });
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

async function logout(req, res) {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
  });

  res.status(200).json({
    status: 200,
    message: "Logout berhasil",
  });
}

module.exports = { login, logout };
