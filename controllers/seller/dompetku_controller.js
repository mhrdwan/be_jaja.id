const { toko_saldo } = require("../../models");

async function detailSaldo(req, res, next) {
    try {
      const limit = parseInt(req.query.limit) || 10;
      const page = parseInt(req.query.page) || 1;
      const offset = (page - 1) * limit;
      const id_toko = await req.user.id_toko;
      let status = req.query.status;
  
      // Konversi status menjadi string jika diberikan
      if (status === '1') {
        status = "done";
      } else if (status === '0') {
        status = "pending";
      }
  
      // Buat kondisi pencarian berdasarkan status, jika tidak ada status, cari semua
      const whereCondition = { id_toko: id_toko };
      if (status) {
        whereCondition.status = status;
      }
  
      // Cari dan hitung data
      const { count, rows: data } = await toko_saldo.findAndCountAll({
        where: whereCondition,
        limit: limit,
        offset: offset,
      });
  
      // Jika data kosong
      if (data.length < 1) {
        return res.status(400).json({
          status: 400,
          message: "Saldo Toko Belum Tersedia",
        });
      }
  
      // Hitung total halaman
      const totalPages = Math.ceil(count / limit);
  
      // Response dengan data
      res.status(200).json({
        message: "Detail Saldo Toko",
        status: 200,
        totalData: count,
        totalPages: totalPages,
        currentPage: page,
        data: data,
      });
    } catch (error) {
      // Tangani error
      res.status(500).json({
        message: "Gagal Mendapatkan Detail Saldo Toko",
        status: 500,
      });
    }
  }
  
module.exports = {
  detailSaldo,
};
