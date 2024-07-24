const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('daftar_merek', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    merek: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'toko',
        key: 'id_toko'
      }
    },
    id_kategori: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_sub_kategori: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keterangan: {
      type: DataTypes.ENUM('admin','seller'),
      allowNull: false,
      defaultValue: "admin"
    },
    status: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    top: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'daftar_merek',
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
        name: "id_toko",
        using: "BTREE",
        fields: [
          { name: "id_toko" },
        ]
      },
    ]
  });
};
