const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inf_lokasi', {
    lokasi_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lokasi_kode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    lokasi_nama: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    lokasi_propinsi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lokasi_kabupatenkota: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: true
    },
    lokasi_kecamatan: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false
    },
    lokasi_kelurahan: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'inf_lokasi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lokasi_ID" },
        ]
      },
      {
        name: "lokasi_kode",
        using: "BTREE",
        fields: [
          { name: "lokasi_kode" },
        ]
      },
      {
        name: "lokasi_propinsi",
        using: "BTREE",
        fields: [
          { name: "lokasi_propinsi" },
        ]
      },
      {
        name: "lokasi_kabupatenkota",
        using: "BTREE",
        fields: [
          { name: "lokasi_kabupatenkota" },
        ]
      },
      {
        name: "lokasi_kecamatan",
        using: "BTREE",
        fields: [
          { name: "lokasi_kecamatan" },
        ]
      },
      {
        name: "lokasi_kelurahan",
        using: "BTREE",
        fields: [
          { name: "lokasi_kelurahan" },
        ]
      },
    ]
  });
};
