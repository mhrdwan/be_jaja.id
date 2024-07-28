const { suksesMessage, errorMessage } = require("../../core/message");
const { customer, produk, toko } = require("../../models");
const { v4: uuidv4 } = require("uuid");

const { buatHashPassword, kirimEmai } = require("../../core/function");
const { hariIni, waktuSekarang } = require("../../core/config");

async function randomAngka() {
  const min = Math.floor(Math.random() * (100000 - 10000) + 10000);
  console.log(min);
  return min;
}
// bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
//   console.log(result);
// });
async function createUser(req, res, next) {
  const secret = uuidv4();
  const kodeVerif = await randomAngka();
  const pin = await randomAngka();
  try {
    const passwordHash = await buatHashPassword(req.body.password);
    const emailCheck = await customer.findOne({
      where: { email: req.body.email },
    });
    if (emailCheck) {
      return res.status(400).json({
        code: 400,
        message: "Email sudah terdaftar",
      });
    }

    // Memeriksa apakah username sudah terdaftar
    const userNameCheck = await customer.findOne({
      where: { username: req.body.username },
    });
    if (userNameCheck) {
      return res.status(400).json({
        code: 400,
        message: "Username sudah terdaftar",
      });
    }
    const user = await customer.create({
      pin: String(pin),
      uid: secret,
      verifikasi: "T",
      referral_code: req.body.referral_code,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      nama_lengkap: req.body.first_name + " " + req.body.last_name,
      email: req.body.email,
      password: passwordHash,
      created_date: hariIni,
      created_time: waktuSekarang,
      username: req.body.username,
      code_secret: String(kodeVerif),
      from_login: req.body.from_login || "website",
      koin: 0,
      // jenis_kelamin: req.body.jenis_kelamin,
      // tgl_lahir: req.body.tgl_lahir,
      // telepon: req.body.telepon,
    });

    //function kirim email
    await kirimEmai({
      from: req.body.email,
      to: req.body.email,
      subject: "Email Verifikasi Jaja.id",
      bodyHtml: `
        <div style="font-family: Arial, sans-serif; color: #blue; line-height: 1.6;">
          <h2 style="font-weight: normal; color: #4CAFblue50;">Hi ${
            req.body.first_name
          },</h2>
          <p>Kode verifikasi kamu adalah:</p>
          <p style="font-size: 18px; font-weight: bold; color: #000;">${String(
            kodeVerif
          )}</p>
          <p>Terima kasih telah bergabung dengan Jaja.id! Jika kamu tidak meminta kode ini, abaikan email ini.</p>
          <br/>
          <p>Salam,</p>
          <p>Tim Jaja.id</p>
        </div>
      `,
    });

    const successResponse = suksesMessage(
      "User Berhasil dibuat dan mengirim email"
    );

    res.status(200).json({
      code: successResponse.code,
      message: successResponse.message,
    });
  } catch (error) {
    next(error);
  }
}

async function verifEmailUser(req, res) {
  const kodeVerif = await randomAngka();
  const { email, code_secret } = req.body;
  try {
    const dataAwal = await customer.findOne({
      where: { email: email, verifikasi: "Y" },
    });
    if (dataAwal) {
      res.json({
        code: 400,
        message: "Email sudah terverifikasi!",
      });
    }
    const db = await customer.update(
      {
        verifikasi: "Y",
      },
      { where: { email: email, code_secret: code_secret } }
    );
    if (db == 0) {
      return res.json({
        code: 404,
        message: "kode verifikasi salah!",
      });
    }
    // res.json(db)
    await customer.update(
      {
        code_secret: kodeVerif,
      },
      { where: { email: email } }
    );
    res.json({
      code: 200,
      message: "Email telah terverifikasi!",
    });
  } catch (error) {}
}



async function lupaPassword(req, res, next) {
  const { email } = req.body;
  const validasiemail = await customer.findOne({ where: { email: email } });
  if (!validasiemail) {
    return res.status(404).json({
      status: 404,
      message: "email tidak di temukan!",
    });
  }
  await kirimEmai({
    from: email,
    to: email,
    subject: "Lupa Password Jaja.id",
    bodyHtml: `
      <div style="font-family: Arial, sans-serif; color: #blue; line-height: 1.6;">
        <h2 style="font-weight: normal; color: #4CAFblue50;">Hi ${validasiemail.first_name},</h2>
        <p>Kode lupa password kamu adalah:</p>
        <p style="font-size: 18px; font-weight: bold; color: #000;">${validasiemail.code_secret}</p>
        <p>Jaga Kode Rahasia Password Akun kamu! Jika kamu tidak meminta kode ini, abaikan email ini.</p>
        <br/>
        <p>Salam,</p>
        <p>Tim Jaja.id</p>
      </div>
    `,
  });

  res.json({
    code: suksesMessage().code,
    message: "Email Berhasil Dikirim",
  });
  try {
  } catch (error) {
    res.json({ error: error.message });
  }
}

async function verifKodeLupaPassword(req, res, next) {
  const { email, code_secret } = req.body;
  const db = await customer.findOne({
    where: { email: email, code_secret: code_secret },
  });
  res.json({
    code: 200,
    message: "Kode Benar",
  });
  try {
  } catch (error) {
    res.json({ error: error.message });
  }
}

async function updatePassword(req, res, next) {
  const { email, code_secret, password } = req.body;
  const passwordHash = await buatHashPassword(password);
  const db = await customer.update(
    { password: passwordHash },
    {
      where: { email: email, code_secret: code_secret },
    }
  );
  console.log(db);
  if (db == 0) {
    return res.status(400).json({
      code: 400,
      message: "Kode Verifikasi Salah",
    });
  }
  if (!password) {
    return res.status(400).json({
      code: 400,
      message: "password harus diisi",
    });
  }
  res.json({
    code: 200,
    message: "Password Berhasil Diubah",
  });
  try {
  } catch (error) {}
}

//function Create Toko
async function createToko(req, res, next) {
  const {
    nama_toko,
    greating_message,
    deskripsi_toko,
    alamat_toko,
    provinsi,
    kota_kabupaten,
    kecamatan,
    kelurahan,
    kode_pos,
    kurir_service,
  } = req.body;
  const { id_customer, nama_lengkap } = req.user;
  console.log(id_customer,nama_lengkap)
  const dbToko = await toko.create({
    nama_toko,
    greating_message,
    deskripsi_toko,
    alamat_toko,
    provinsi,
    kota_kabupaten,
    kecamatan,
    kelurahan,
    kode_pos,
    id_user: id_customer,
    skor: 0,
    created_date: new Date(),
    kurir_service: kurir_service || "",
    ranking: "bronze-1-hd",
    nama_user: nama_lengkap,
    min_free_ongkir: 0,
    created_time: new Date().getTime(),
  });
  res.json({
    code: 200,
    message: "Toko Berhasil Dibuat",
    data: dbToko,
  });
  try {
  } catch (error) {
    res.json({ code: error.code });
  }
}

module.exports = {
  createUser,
  createToko,
  lupaPassword,
  verifKodeLupaPassword,
  updatePassword,
  verifEmailUser,
};
