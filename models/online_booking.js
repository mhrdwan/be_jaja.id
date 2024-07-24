const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('online_booking', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pickup: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    destinasi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alamat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penerima: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tlp_penerima: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tgl_pickup: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    jam_pickup: {
      type: DataTypes.TIME,
      allowNull: true
    },
    berat: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    service_order: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    qty: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    nama_p: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    tlp_p: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    id_provinsi_p: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_kota_p: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_kecamatan_p: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_kelurahan_p: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alamat_detail_p: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    invoice: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'online_booking',
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
