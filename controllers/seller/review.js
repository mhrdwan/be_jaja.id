const { produk_rating } = require("../../models");

async function listRating(req, res, next) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    const dataList = await produk_rating.findAll({
      where: { id_toko: req.user.id_toko },
      limit: limit,
      offset: offset,
    });
    res.json({
      status: 200,
      message: "Berhasil mendapatkan data rating",
      totalData: dataList.length,
      totalPages: Math.ceil(dataList.count / limit),
      currentPage: page,
      data: dataList,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: error.message,
    });
  }
}
async function detailRating(req, res, next) {
  try {
    const dataList = await produk_rating.findAll({
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

module.exports = { listRating, detailRating };
