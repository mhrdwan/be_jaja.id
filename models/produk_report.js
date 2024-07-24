const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produk_report', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_toko: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nama_produk: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    produk_slug: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pilih_alasan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    alasan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'produk_report',
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
    ]
  });
};
