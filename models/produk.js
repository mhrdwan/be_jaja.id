const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produk', {
    id_produk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    is_gift: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    nama_produk: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_kategori: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'kategori_produk',
        key: 'id_kategori'
      }
    },
    id_sub_kategori: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    merek: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'daftar_merek',
        key: 'id_data'
      }
    },
    kode_sku: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    berat: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: false,
      comment: "satuan gram"
    },
    ukuran_paket_panjang: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    ukuran_paket_lebar: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    ukuran_paket_tinggi: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    asal_produk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'asal_produk',
        key: 'id_data'
      }
    },
    etalase: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    disabled: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'toko',
        key: 'id_toko'
      }
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grosir_min1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grosir_price1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grosir_min2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grosir_price2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grosir_min3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grosir_price3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grosir_min4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grosir_price4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grosir_min5: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grosir_price5: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    diskon: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    variasi_harga: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kondisi: {
      type: DataTypes.ENUM('bekas','baru'),
      allowNull: false
    },
    masa_pengemasan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pre_order: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: true,
      defaultValue: "T"
    },
    draft: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    status_produk: {
      type: DataTypes.ENUM('live','ditolak','blokir','arsipkan','menunggu konfirmasi','habis'),
      allowNull: false,
      defaultValue: "live"
    },
    slug_produk: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "slug_produk"
    },
    tag_produk: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    source_link_scrab: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status_pilih: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    }
  }, {
    sequelize,
    tableName: 'produk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_produk" },
        ]
      },
      {
        name: "slug_produk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "slug_produk" },
        ]
      },
      {
        name: "id_kategori",
        using: "BTREE",
        fields: [
          { name: "id_kategori" },
        ]
      },
      {
        name: "merek",
        using: "BTREE",
        fields: [
          { name: "merek" },
        ]
      },
      {
        name: "asal_produk",
        using: "BTREE",
        fields: [
          { name: "asal_produk" },
        ]
      },
      {
        name: "produk_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "id_sub_kategori" },
        ]
      },
      {
        name: "id_toko",
        using: "BTREE",
        fields: [
          { name: "id_toko" },
        ]
      },
    ]
  });
};
