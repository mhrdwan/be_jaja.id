const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produk_flashsale', {
    id_flashsale: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_variasi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    diskon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date_live: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    time_live: {
      type: DataTypes.ENUM('09:00','18:00'),
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_data: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah_flashsale: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    jumlah_terjual: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_flashsale: {
      type: DataTypes.ENUM('aktif','nonaktif'),
      allowNull: false,
      defaultValue: "aktif"
    }
  }, {
    sequelize,
    tableName: 'produk_flashsale',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_flashsale" },
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
        name: "date_live",
        using: "BTREE",
        fields: [
          { name: "date_live" },
          { name: "time_live" },
          { name: "id_toko" },
        ]
      },
      {
        name: "id_data",
        using: "BTREE",
        fields: [
          { name: "id_data" },
        ]
      },
      {
        name: "jumlah_flashsale",
        using: "BTREE",
        fields: [
          { name: "jumlah_flashsale" },
        ]
      },
      {
        name: "jumlah_terjual",
        using: "BTREE",
        fields: [
          { name: "jumlah_terjual" },
        ]
      },
    ]
  });
};
