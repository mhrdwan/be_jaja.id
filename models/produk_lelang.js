const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produk_lelang', {
    id_lelang: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    harga_lelang: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    harga_deal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jam_lelang: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tgl_mulai: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tgl_akhir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tgl_deal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_customer_deal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('live','deal'),
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status_lelang: {
      type: DataTypes.ENUM('aktif','ditolak'),
      allowNull: false,
      defaultValue: "aktif"
    }
  }, {
    sequelize,
    tableName: 'produk_lelang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_lelang" },
        ]
      },
      {
        name: "id_produk",
        using: "BTREE",
        fields: [
          { name: "id_produk" },
        ]
      },
    ]
  });
};
