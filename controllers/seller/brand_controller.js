const { suksesMessage } = require("../../core/message");
const { daftar_merek } = require("../../models");

async function getBrand(req, res, next) {
  const id_customer = req.user.id_customer;
  try {
    const daftar_mereks = await daftar_merek.findAll({
      where: { id_user: id_customer },
    });
    const data = {
      // dataCookies:daftar_mereks,
      id_customer: id_customer,
      message: suksesMessage().message,
      status: suksesMessage().code,
      totalData: daftar_mereks.length,
      data: daftar_mereks.map((itemm) => {
        return {
          merek: itemm.merek,
          id_merek: itemm.id_data,
          // item : itemm
        };
      }),
    };
    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function getDetailBrand(req, res, next) {
  try {
    const daftar_mereks = await daftar_merek.findOne({
      where: { id_data: req.query.id_data },
    });
    const data = {
      message: suksesMessage().message,
      status: suksesMessage().code,
      totalData: daftar_mereks.length,
      data: daftar_mereks,
    };
    res.json(data);
  } catch (error) {
    res.json({
      code: 400,
      message: "Tidak ditemukan",
    });
  }
}

async function deleteBrand(req, res, next) {
  const idMerek = req.body.id_merek;

  try {
    const deletedCount = await daftar_merek.destroy({
      where: { id_data: idMerek },
    });

    if (deletedCount === 0) {
      res.status(400).json({
        code: 400,
        message: "Data Tidak Ada",
      });
    } else {
      res.status(200).json({
        code: 200,
        message: "Berhasil Menghapus Data",
      });
    }
  } catch (error) {
    next(error);
  }
}

async function updateBrand(req, res, next) {
  try {
    const [affectedRows] = await daftar_merek.update(
      { merek: req.body.nama_merek },
      {
        where: {
          id_data: req.body.id_data,
        },
      }
    );

    if (affectedRows === 0) {
      return res.status(404).json({
        code: 404,
        message: "Data tidak ada",
      });
    }

    res.json({
      code: 200,
      message: "Nama Brand berhasil di update",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { getBrand, deleteBrand, updateBrand, getDetailBrand };
