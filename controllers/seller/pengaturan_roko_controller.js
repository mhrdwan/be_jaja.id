const { toko } = require("../../models");

async function informasiProfile(req, res, next) {
  const dbToko = await toko.findOne({
    where: { id_toko: req.user.id_toko },
    attributes: [
      "nama_toko",
      "slug_toko",
      "foto",
      "alamat_toko",
      "nama_user",
      "greating_message",
      "deskripsi_toko",
      "skor",
      "kategori_seller",
    ],
  });
  try {
    res.json({
      code: 200,
      message: "Berhasil mendapatkan data toko",
      data: dbToko,
    });
  } catch (error) {}
}

async function updateProfile(req, res, next) {
  try {
    const { nama_toko, greating_message, deskripsi_toko } = req.body;

    const dbToko = await toko.update(
      {
        nama_toko,
        greating_message,
        deskripsi_toko,
      },
      {
        where: {
          id_toko: req.user.id_toko,
        },
      }
    );

    res.json({
      code: 200,
      message: "Berhasil update data toko",
    });
  } catch (error) {
    next(error);
  }
}

async function lokasi(req, res, next) {
  const dbToko = await toko.findOne({
    where: { id_toko: 25 },
    attributes: [
      "nama_toko",
      "alamat_toko",
      "provinsi",
      "kota_kabupaten",
      "kecamatan",
      "kelurahan",
      "kode_pos",
      "kurir_service",
    ],
  });

  try {
    res.json({
      code: 200,
      message: "Berhasil mendapatkan data alamat toko",
      data: dbToko,
    });
  } catch (error) {}
}

module.exports = { informasiProfile, updateProfile, lokasi };
