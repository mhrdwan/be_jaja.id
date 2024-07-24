const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jauto_produk_images', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_jauto_produk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jenis_gambar: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "body"
    },
    imagePath: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    colorName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hexColorCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'jauto_produk_images',
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
          { name: "id_jauto_produk" },
        ]
      },
      {
        name: "model",
        using: "BTREE",
        fields: [
          { name: "colorName" },
        ]
      },
      {
        name: "warna",
        using: "BTREE",
        fields: [
          { name: "hexColorCode" },
        ]
      },
      {
        name: "id_produk_2",
        using: "BTREE",
        fields: [
          { name: "id_jauto_produk" },
        ]
      },
    ]
  });
};
