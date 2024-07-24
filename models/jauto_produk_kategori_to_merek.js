const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jauto_produk_kategori_to_merek', {
    id_produk_kategori: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_merek: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jauto_produk_kategori_to_merek',
    timestamps: false,
    indexes: [
      {
        name: "id_produk_kategori",
        using: "BTREE",
        fields: [
          { name: "id_produk_kategori" },
        ]
      },
      {
        name: "id_merek",
        using: "BTREE",
        fields: [
          { name: "id_merek" },
        ]
      },
    ]
  });
};
