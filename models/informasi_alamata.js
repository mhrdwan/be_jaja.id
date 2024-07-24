const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('informasi_alamata', {
    id_alamat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    no_telepon: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    provinsi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kota_kabupaten: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kecamatan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kode_pos: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    alamat_lengkap: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_utama: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    nama_alamat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kelurahan: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'informasi_alamata',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_alamat" },
        ]
      },
    ]
  });
};
