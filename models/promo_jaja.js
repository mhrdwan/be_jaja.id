const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_jaja', {
    id_promo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    is_generate_with_code: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    kode_promo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "kode_promo"
    },
    mulai: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    berakhir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    judul_promo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    url_promo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status_aktif: {
      type: DataTypes.ENUM('Aktif','Tidak Aktif'),
      allowNull: false,
      defaultValue: "Aktif"
    },
    id_kategori: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_sub_kategori: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_admin: {
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
    banner_promo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nominal_diskon: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    persentase_diskon: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    aktifkan: {
      type: DataTypes.ENUM('T','Y'),
      allowNull: true,
      defaultValue: "Y"
    },
    kuota: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipe_voucher: {
      type: DataTypes.ENUM('global','khusus'),
      allowNull: true
    },
    min_belanja: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    max_diskon: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kategori_promo: {
      type: DataTypes.ENUM('diskon','ongkir','cashback','gratis'),
      allowNull: true
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'promo_jaja',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_promo" },
        ]
      },
      {
        name: "kode_promo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kode_promo" },
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
        name: "id_sub_kategori",
        using: "BTREE",
        fields: [
          { name: "id_sub_kategori" },
        ]
      },
    ]
  });
};
