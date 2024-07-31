const { toko_payouts } = require("../../models");

async function listRekeningBank(req, res, next) {
  const id_toko = req.user.id_toko;
  try {
    const db = await toko_payouts.findAll({ where: { id_toko: id_toko } });
    if (db.length < 1) {
      return res.json({ status: 404, message: "Toko belum ada rekening!" });
    }
    res.json({
      status: 200,
      message: "Data rekening bank berhasil diambil",
      totalData: db.length,
      data: db,
    });
  } catch (error) {
    res.json(error);
  }
}

async function detailRekeningBank(req, res, next) {
  try {
    const db = await toko_payouts.findOne({
      where: { id_payouts: req.query.id_payouts },
    });
    if (db.length < 1) {
      return res.json({ status: 404, message: "Toko belum ada rekening!" });
    }
    res.json({
      status: 200,
      message: "Data rekening bank berhasil diambil",
      totalData: db.length,
      data: db,
    });
  } catch (error) {
    res.json(error);
  }
}

async function updateRekeningBank(req, res, next) {
  const { nama, no_bank, nama_bank, email } = req.body;
  if (!nama || !no_bank || !nama_bank || !email || !id_payouts) {
    return res
      .status(400)
      .json({ status: 400, message: "Semua field wajib diisi." });
  }
  try {
    const db = await toko_payouts.update(
      {
        beneficiary_name: nama,
        beneficiary_account: no_bank,
        beneficiary_bank: nama_bank,
        beneficiary_email: email,
        status: "queued",
      },
      {
        where: { id_payouts: req.body.id_payouts },
      }
    );
    if (db.length < 1) {
      return res.json({ status: 404, message: "Toko belum ada rekening!" });
    }
    res.json({
      status: 200,
      message: "Data rekening bank berhasil diupdate",
    });
  } catch (error) {
    res.json(error);
  }
}

async function deleteRekeningBank(req, res, next) {
  try {
    const db = await toko_payouts.destroy({
      where: { id_payouts: req.body.id_payouts , id_toko : req.user.id_toko },
    });

    if (!req.body.id_payouts) {
      return res.json({ status: 404, message: "id_payouts harus diisi" });
    }
    if (!db) {
      return res.json({ status: 404, message: "User Data rekening bank tidak ditemukan" });
    }
    res.json({
      status: 200,
      message: "Data rekening bank berhasil didelete",
    });
  } catch (error) {
    res.json(error);
  }
}

module.exports = {
  listRekeningBank,
  detailRekeningBank,
  updateRekeningBank,
  deleteRekeningBank,
};
