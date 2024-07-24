const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persetujuan_produk', {
    id_persetujuan: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produk',
        key: 'id_produk'
      }
    },
    jam_pengajuan: {
      type: DataTypes.TIME,
      allowNull: true
    },
    tanggal_pengajuan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    alasan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    saran: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jam_konfirmasi: {
      type: DataTypes.TIME,
      allowNull: true
    },
    tanggal_konfirmasi: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nama_admin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pelanggaran: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'persetujuan_produk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_persetujuan" },
        ]
      },
      {
        name: "persetujuan_produk_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "id_produk" },
        ]
      },
    ]
  });
};
