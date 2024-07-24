const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('informasi_pengiriman', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_kurir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_kurir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    berat: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    ukuran_paket_panjang: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    ukuran_paket_lebar: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    ukuran_paket_tinggi: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produk',
        key: 'id_produk'
      }
    }
  }, {
    sequelize,
    tableName: 'informasi_pengiriman',
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
          { name: "id_produk" },
        ]
      },
    ]
  });
};
