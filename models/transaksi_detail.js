const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaksi_detail', {
    id_detail: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_data: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'transaksi',
        key: 'id_data'
      }
    },
    id_flashsale: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_lelang: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order_id: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    invoice: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama_produk: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    qty: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    berat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1000
    },
    harga_aktif: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    harga_awal: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    koin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ongkir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    expedisi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    etd: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    waktu_kirim: {
      type: DataTypes.ENUM('setiap saat','jam kantor','pilih tanggal'),
      allowNull: true
    },
    tgl_kirim: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nama_toko: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    logo_toko: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status_pickup: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    status_pengiriman: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sub_total: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    foto_produk: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_kategori: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_variasi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    file_ebook: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "tersedia untuk kategori ebook"
    },
    cetak_label: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: true,
      defaultValue: "T",
      comment: "Tanda untuk pencetakan label pengiriman oleh seller"
    },
    date_time_cetak_label: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "kapan produk dicetak"
    },
    date_time_pengiriman: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "kapan pengiriman dilakukan kepada kurir."
    },
    date_time_terima_expired: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sudah_kirim: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: true,
      defaultValue: "T",
      comment: "Berfungsi untuk tanda produk telah dikirimkan kepada kurir."
    },
    pesanan_diterima: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: true,
      comment: "Jika barang telah diterima maka buyer melakukan klik pesanan diterima."
    },
    date_time_pesanan_diterima: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status_pesanan: {
      type: DataTypes.ENUM('belum dibayar','disiapkan','dikirim','selesai','dibatalkan'),
      allowNull: false,
      defaultValue: "belum dibayar"
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_voucher_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_package_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    catatan_package_toko: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pesan_customer_toko: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    greeting_card_gift: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "jika produk adalah jaja gift"
    },
    notifikasi_admin: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    notifikasi_seller: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    notifikasi_buyer: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    produk_batal: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T",
      comment: "Pilih produk yang akan dibatalkan"
    }
  }, {
    sequelize,
    tableName: 'transaksi_detail',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_detail" },
        ]
      },
      {
        name: "invoice",
        using: "BTREE",
        fields: [
          { name: "invoice" },
        ]
      },
      {
        name: "id_data",
        using: "BTREE",
        fields: [
          { name: "id_data" },
        ]
      },
    ]
  });
};
