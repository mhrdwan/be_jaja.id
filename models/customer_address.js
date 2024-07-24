const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_address', {
    id_alamat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    label: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    no_telepon: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    alamat_lengkap: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    provinsi_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    provinsi: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kota_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kota: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kecamatan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kecamatan: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kelurahan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    kelurahann: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    kode_pos: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    alamat_koordinat: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    latitude: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: true
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'id_customer'
      }
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
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'customer_address',
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
      {
        name: "id_customer",
        using: "BTREE",
        fields: [
          { name: "id_customer" },
        ]
      },
    ]
  });
};
