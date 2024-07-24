const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produk_wishlist', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    toko: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    produk: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    produk_slug: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    produk_cover: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    notifikasi_seller: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    }
  }, {
    sequelize,
    tableName: 'produk_wishlist',
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
