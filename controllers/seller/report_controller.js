const { produk_report } = require("../../models");

async function listProdukReport(req, res, next) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;

    const db = await produk_report.findAndCountAll({
      where: {
        id_toko: req.user.id_toko,
      },
      limit: limit,
      offset: offset,
    });

    res.json({
      status: 200,
      message: "Data laporan produk berhasil diambil",
      totalData: db.count,
      totalPages: Math.ceil(db.count / limit),
      currentPage: page,
      data: db.rows,
    });
  } catch (error) {
    next(error);
  }
}

async function detailProdukReport(req, res, next) {
    try {
      const dataList = await produk_report.findAll({
        where: {
          id_toko: req.user.id_toko,
          id_produk: req.query.id_produk,
        },
      });
      res.json({
        status: 200,
        message: "Berhasil mendapatkan detail data produk",
        totalData: dataList.length,
        data: dataList,
      });
    } catch (error) {
      res.json({
        status: 500,
        message: error.message,
      });
    }
  }
  


module.exports = {
  listProdukReport,
  detailProdukReport
};
