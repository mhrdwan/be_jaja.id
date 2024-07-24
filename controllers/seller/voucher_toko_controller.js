const { Op } = require("sequelize");
const { suksesMessage } = require("../../core/message");
const { promo_toko } = require("../../models");

async function listPromoToko(req, res, next) {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) * limit;

  try {
    const data = await promo_toko.findAndCountAll({
      limit: limit,
      offset: offset,
    });
    res.json({
      status: 200,
      message: suksesMessage().message,
      totalData: data.count,
      totalPages: Math.ceil(data.count / limit),
      currentPage: page,
      data: data.rows.map((item) => ({
        id_promo: item.id_promo,
        kode_promo: item.kode_promo,
        judul_promo: item.judul_promo,
        status_aktif: item.status_aktif,
        nama_toko: item.nama_toko,
        id_toko: item.id_toko,
      })),
    });
  } catch (error) {
    res.json({ error });
  }
}

async function detailPromoToko(req, res, next) {
  const { nama_toko: namaToko, id_toko: idToko } = req.query;

  let whereClause = {};

  if (namaToko) {
    whereClause.nama_toko = {
      [Op.like]: `%${namaToko}%`,
    };
  }

  if (idToko) {
    whereClause.id_toko = idToko;
  }

  try {
    const data = await promo_toko.findAll({
      where: whereClause,
    });

    res.json({
      status: 200,
      message: suksesMessage().message,
      totalData: data.length,
      data,
    });
  } catch (error) {
    res.json({ error });
  }
}

async function updatePromo(req, res, next) {
  const {
    id_promo,
    kode_promo,
    judul_promo,
    status_aktif,
    nominal_diskon,
    min_belanja,
    max_diskon,
    kuota_voucher,
    mulai,
    berakhir,
  } = req.body;
  console.log(id_promo);
  try {
    const response = await promo_toko.update(
      {
        kode_promo,
        judul_promo,
        status_aktif,
        nominal_diskon,
        min_belanja,
        max_diskon,
        kuota_voucher,
        mulai,
        berakhir,
      },
      {
        where: { id_promo },
      }
    );

    res.status(200).json({ message: "Promo updated successfully" });
  } catch (error) {
    next(error);
  }
}

async function deleteVocher(req, res, next) {
  const { id_promo } = req.body;

  try {
    const response = await promo_toko.destroy({
      where: { id_promo },
    });

    if (response === 0) {
      return res.status(404).json({ message: "Promo not found" });
    }

    res.status(200).json({ message: "Promo berhasil di delete" });
  } catch (error) {
    next(error);
  }
}

module.exports = { listPromoToko, detailPromoToko, updatePromo,deleteVocher };
