const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detail_produk_buku', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jumlah_halaman: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ketebalan_buku: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tgl_terbit: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    isbn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    berat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lebar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    panjang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    profil_penulis: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    foto_penulis: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama_pengarang: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'detail_produk_buku',
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
