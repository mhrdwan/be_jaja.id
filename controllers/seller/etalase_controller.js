const { suksesMessage } = require("../../core/message");
const { etalase_toko } = require("../../models");

async function getEtalase(req, res, next) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;

    const response = await etalase_toko.findAll({
      where: { id_toko: req.query.id_toko },
      limit: limit,
      offset: offset,
    });

    res.json({
      status: 200,
      message: suksesMessage().message,
      data: response,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
}

async function getDetailEtalase(req, res, next) {
  try {
    const response = await etalase_toko.findAll({
      where: { id_data: req.query.id_data },
    });

    res.json({
      status: 200,
      message: suksesMessage().message,
      data: response,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
}

async function updateEtalase(req, res, next) {
  try {
    if (!req.body.nama_etalase) {
      return res.status(404).json({
        status: 404,
        message: "Nama etalase wajib diisi",
      });
    }
    const response = await etalase_toko.update(
      {
        nama_etalase: req.body.nama_etalase,
        slug_etalase: req.body.slug_etalase,
        keterangan: req.body.keterangan,
      },
      {
        where: { id_data: req.body.id_data },
      }
    );

    res.json({
      status: 200,
      message: "Sukses Update Etalase",
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
}

async function deleteEtalase(req, res, next) {
  try {
    if (!req.body.id_data) {
      return res.status(404).json({
        status: 404,
        message: "Nama etalase wajib diisi",
      });
    }
    const response = await etalase_toko.destroy({
      where: { id_data: req.body.id_data },
    });
    if (response === 0) {
      return res.json({ status: 400, message: "id_data tidak ada" });
    }
    res.json({
      status: 200,
      message: "Sukses Delete Etalase",
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
}

module.exports = { getEtalase, getDetailEtalase, updateEtalase, deleteEtalase };
