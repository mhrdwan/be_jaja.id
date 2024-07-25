const { suksesMessage, errorMessage } = require("../../core/message");
const { produk } = require("../../models");

async function getProdukUser(req, res, next) {
  const userId = req.user.id_customer;
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) * limit;

  if (!userId) {
    return res.status(400).json({ message: "id_user is required" });
  }

  try {
    const { count, rows: datanya } = await produk.findAndCountAll({
      where: { id_user: userId },
      limit: limit,
      offset: offset,
    });

    const totalPages = Math.ceil(count / limit);

    const tampilan = {
      message: suksesMessage().message,
      code: suksesMessage().code,
      totalData: count,
      totalPages: totalPages,
      currentPage: page,
      data: datanya,
    };

    res.status(200).json(tampilan);
  } catch (error) {
    next(error);
  }
}

async function produkDetail(req, res, next) {
  try {
    const dbProduk = await produk.findOne({
      where: { id_produk: req.query.id_produk },
    });
    if (!dbProduk) {
      throw new Error("Produk Tidak Ditemukan");
    }
    res.json({
      code: 200,
      message: "Berhasil Mendapatkan Produk Detail",
      data: dbProduk,
    });
  } catch (error) {
    res.status(404).json({ next: error.message });
  }
}

async function deleteProduk(req, res, next) {
  try {
    const dbProduk = await produk.findOne({
      where: { id_produk: req.body.id_produk },
    });
    if (!dbProduk) {
      return res.json({
        code: 404,
        message: "Produk Tidak Ditemukan",
      });
    }
    res.json({
      code: 200,
      message: "Berhasil Menghapus Produk",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
}

async function updateProduk(req, res, next) {
  const {
    is_gift,
    is_delete,
    nama_produk,
    deskripsi,
    merek,
    kode_sku,
    berat,
    ukuran_paket_panjang,
    ukuran_paket_lebar,
    ukuran_paket_tinggi,
    asal_produk,
    etalase,
    harga,
    grosir_min1,
    grosir_price1,
    grosir_min2,
    grosir_price2,
    grosir_min3,
    grosir_price3,
    grosir_min4,
    grosir_price4,
    grosir_min5,
    grosir_price5,
    diskon,
    variasi_harga,
    stok,
    kondisi,
    masa_pengemasan,
    pre_order,
    draft,
    status_produk,
    slug_produk,
    tag_produk,
    source_link_scrab,
    status_pilih,
  } = req.body;
  const db = await produk.update(
    is_gift,
    is_delete,
    nama_produk,
    deskripsi,
    merek,
    kode_sku,
    berat,
    ukuran_paket_panjang,
    ukuran_paket_lebar,
    ukuran_paket_tinggi,
    asal_produk,
    etalase,
    harga,
    grosir_min1,
    grosir_price1,
    grosir_min2,
    grosir_price2,
    grosir_min3,
    grosir_price3,
    grosir_min4,
    grosir_price4,
    grosir_min5,
    grosir_price5,
    diskon,
    variasi_harga,
    stok,
    kondisi,
    masa_pengemasan,
    pre_order,
    draft,
    status_produk,
    slug_produk,
    tag_produk,
    source_link_scrab,
    status_pilih,
    { where: { id_produk: req.body.id_produk } }
  );
  res.json({
    code: 200,
    message: "Berhasil Mengubah Produk",
    data: db,
  });
  try {
  } catch (error) {
    res.json({
      code: 500,
      message: error.message,
    });
  }
}

async function lisDiskonToko(req, res, next) {
    const userId = req.user.id_customer;
    const limit = parseInt(req.query.limit) || 10; 
    const page = parseInt(req.query.page) || 1; 
    const offset = (page - 1) * limit;
  
    try {
      const { count, rows } = await produk.findAndCountAll({
        where: { id_user: userId },
        limit: limit,
        offset: offset,
      });
  
      res.json({
        code: 200,
        message: "Berhasil Mendapatkan Produk",
        totalData: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        data: rows.map((item, index) => {
          return {
            no: offset + index + 1,
            stok: item.stok,
            nama_produk: item.nama_produk,
            harga: item.harga,
            diskon: item.diskon,
          };
        }),
      });
    } catch (error) {
      next(error);
    }
  }
  

module.exports = {
  produkDetail,
  getProdukUser,
  deleteProduk,
  updateProduk,
  lisDiskonToko,
};
