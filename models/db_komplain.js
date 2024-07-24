const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_komplain', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jenis_komplain: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    judul_komplain: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    komplain: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gambar1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gambar2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gambar3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    video: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    solusi: {
      type: DataTypes.ENUM('refund','change','lengkapi','tolak','pengiriman'),
      allowNull: true
    },
    catatan_solusi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    confirm_solusi: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: true
    },
    date_confirm_solusi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('request','confirmed','sendback','delivered','completed'),
      allowNull: false,
      defaultValue: "request"
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: true
    },
    resi_customer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_resi_cust: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_confirm_by_seller: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tolak_by_seller: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "alasan"
    },
    resi_seller: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_resi_seller: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_confirm_by_cust: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'db_komplain',
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
      {
        name: "id_produk",
        using: "BTREE",
        fields: [
          { name: "id_produk" },
        ]
      },
    ]
  });
};
