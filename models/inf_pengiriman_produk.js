const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inf_pengiriman_produk', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pesan: {
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
    },
    invoice: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_detail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produk',
        key: 'id_produk'
      }
    },
    nomor_resi: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inf_pengiriman_produk',
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
        name: "id_produk",
        using: "BTREE",
        fields: [
          { name: "id_detail" },
        ]
      },
    ]
  });
};
