const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_toko', {
    id_promo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    promo_category: {
      type: DataTypes.ENUM('claim','general','unique'),
      allowNull: false
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
      allowNull: false
    },
    id_kategori: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_sub_kategori: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_toko: {
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
    min_belanja: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max_diskon: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kuota_voucher: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'promo_toko',
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
    ]
  });
};
