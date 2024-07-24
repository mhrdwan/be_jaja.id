const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produk_stok', {
    id_stok: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'produk',
        key: 'id_produk'
      }
    },
    id_variasi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jumlah_stok: {
      type: DataTypes.DECIMAL(25,0),
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
    status: {
      type: DataTypes.ENUM('in','out'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'produk_stok',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_stok" },
        ]
      },
      {
        name: "id_produk",
        using: "BTREE",
        fields: [
          { name: "id_produk" },
        ]
      },
      {
        name: "id_variasi",
        using: "BTREE",
        fields: [
          { name: "id_variasi" },
        ]
      },
    ]
  });
};
