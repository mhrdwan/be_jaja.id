const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaksi', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "invoice"
    },
    billing_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    faktur: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_admin: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    batas_pembayaran: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_customer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_voucher: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kode_voucher: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    diskon_voucher: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    diskon_voucher_toko: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    id_voucher_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alamat_pengiriman: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    latitude_receiver: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    longitude_receiver: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    postal_code_receiver: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nama_penerima: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telp_penerima: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    code_pengiriman: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    type_pengiriman: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pengiriman: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    desc_pengiriman: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    waktu_pengiriman: {
      type: DataTypes.ENUM('setiap saat','jam kantor','pilih tanggal'),
      allowNull: false
    },
    tgl_pengiriman: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status_transaksi: {
      type: DataTypes.ENUM('Batal','Telah dibayar','Menunggu Pembayaran'),
      allowNull: false
    },
    pesan_customer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_package: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pesan_package: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    biaya_package: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tgl_pembayaran: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    jam_pembayaran: {
      type: DataTypes.TIME,
      allowNull: true
    },
    metode_pembayaran: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    koin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    biaya_asuransi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "new"
    },
    biaya_ongkir: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    total_tagihan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_pembayaran: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: false,
      defaultValue: 0,
      comment: "total Invoice"
    },
    judul_promo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_ongkir: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true,
      comment: "Qty dikali dengan Harga Biaya Ongkir"
    },
    link_qrcode: {
      type: DataTypes.TEXT,
      allowNull: true
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
    nama_pengirim_dropship: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nomor_telepon_dropship: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    bank_id: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    bank_code: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    estimasi_pengiriman_kurir: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status_pembatalan: {
      type: DataTypes.ENUM('Pembatalan Otomatis','Pembatalan Dari Penjual','Pembatalan Dari Pembeli','Pembatalan Sebagian Produk'),
      allowNull: true
    },
    alasan_pembatalan: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "buyer"
    },
    alasan_tolak: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "seller"
    },
    terima_pesanan: {
      type: DataTypes.ENUM('terima','tolak','baru'),
      allowNull: false,
      defaultValue: "baru"
    },
    kendala_toko: {
      type: DataTypes.ENUM('stok','kurir','tokotutup','pembeli','lainnya'),
      allowNull: true
    },
    confirm_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status_komplain: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    complain_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transaksi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_data" },
        ]
      },
      {
        name: "invoice",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invoice" },
        ]
      },
    ]
  });
};
