const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('toko_banner', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    banner: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipe: {
      type: DataTypes.ENUM('utama','1','2','3'),
      allowNull: true
    },
    slug: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipe_link: {
      type: DataTypes.ENUM('kategori','produk'),
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'toko_banner',
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
