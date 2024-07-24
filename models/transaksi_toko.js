const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaksi_toko', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_kurir: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama_kurir: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    tipe: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    etd: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'transaksi_toko',
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
