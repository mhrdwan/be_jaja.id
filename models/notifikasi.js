const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notifikasi', {
    id_notif: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_wish: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipe_notif: {
      type: DataTypes.ENUM('transaksi','wishlist','from_jaja','produk'),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_data: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invoice: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    notifikasi_seller: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    notifikasi_buyer: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
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
    tableName: 'notifikasi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_notif" },
        ]
      },
    ]
  });
};
