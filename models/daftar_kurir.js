const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('daftar_kurir', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_admin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kurir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kode_kurir: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status_aktif: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    jenis_kurir: {
      type: DataTypes.ENUM('reguler','sameday'),
      allowNull: false
    },
    maksimal_berat: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: false,
      defaultValue: 0,
      comment: "Dalam Satuan KG"
    }
  }, {
    sequelize,
    tableName: 'daftar_kurir',
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
