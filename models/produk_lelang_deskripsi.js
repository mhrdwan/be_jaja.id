const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produk_lelang_deskripsi', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id_lelang: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lokasi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    merk: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    seri: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nopol: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    silinder: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    tipe: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    transmisi: {
      type: DataTypes.ENUM('AT','MT'),
      allowNull: false
    },
    tahun_pembuatan: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    nomor_rangka: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nomor_mesin: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    kilometer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bahan_bakar: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    warna_fisik: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    penggerak: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    tgl_keur: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tgl_stnk: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    bpkb: {
      type: DataTypes.ENUM('Ada','Tidak Ada'),
      allowNull: false
    },
    faktur: {
      type: DataTypes.ENUM('Ada','Tidak Ada'),
      allowNull: false
    },
    kuintansi: {
      type: DataTypes.ENUM('Ada','Tidak Ada'),
      allowNull: false
    },
    surat_pelepasan_hak: {
      type: DataTypes.ENUM('Ada','Tidak Ada'),
      allowNull: false
    },
    ktp_pemilik: {
      type: DataTypes.ENUM('Ada','Tidak Ada'),
      allowNull: false
    },
    form_a: {
      type: DataTypes.ENUM('Ada','Tidak Ada'),
      allowNull: false
    },
    grade_interior: {
      type: DataTypes.ENUM('A','B','C','D','E'),
      allowNull: false
    },
    grade_exterior: {
      type: DataTypes.ENUM('A','B','C','D','E'),
      allowNull: false
    },
    grade_rangka: {
      type: DataTypes.ENUM('A','B','C','D','E'),
      allowNull: false
    },
    grade_mesin: {
      type: DataTypes.ENUM('A','B','C','D','E'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'produk_lelang_deskripsi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
