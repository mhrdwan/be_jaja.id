const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produk_cart', {
    id_cart: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status_pilih: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    toko: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    produk: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    produk_slug: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    produk_cover: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_flashsale: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_lelang: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_variasi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    model_variasi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    warna_variasi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ukuran_variasi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    berat: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('flashsale','lelang'),
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    desc_pengiriman: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    harga_pengiriman: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    etd_pengiriman: {
      type: DataTypes.STRING(10),
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
    kurir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_package_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    harga_package_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    catatan_package_toko: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_voucher_jaja: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nominal_voucher_jaja: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kategori_voucher_jaja: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_voucher_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nominal_voucher_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_harga_diskon_toko: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "total harga produk - nominal voucher toko"
    },
    pesan_customer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    koin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    greeting_card_gift: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "jika produk adalah jaja gift"
    },
    is_multidrop: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_alamat_multi_drop: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent_id_cart: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'produk_cart',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cart" },
        ]
      },
      {
        name: "INDEX",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "date_added" },
          { name: "qty" },
        ]
      },
      {
        name: "id_toko",
        using: "BTREE",
        fields: [
          { name: "id_toko" },
        ]
      },
      {
        name: "id_produk_variasi",
        using: "BTREE",
        fields: [
          { name: "id_variasi" },
        ]
      },
    ]
  });
};
