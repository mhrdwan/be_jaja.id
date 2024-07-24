const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('toko', {
    id_toko: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    token_fcm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama_toko: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    slug_toko: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    foto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    foto_ktp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    foto_npwp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    blokir: {
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
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'id_customer'
      }
    },
    nama_user: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    greating_message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deskripsi_toko: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    alamat_toko: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    alamat_google: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    latitude: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: true
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
    kelurahan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kode_pos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    toko_pilihan: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    kategori_seller: {
      type: DataTypes.ENUM('Bronze','Platinum','Diamond'),
      allowNull: false,
      defaultValue: "Bronze"
    },
    ranking: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    pin_penghasilan: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "pin digunakan untuk mengunci data penghasilan"
    },
    id_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_admin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pilihan_kurir: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "jne"
    },
    kurir_service: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    free_ongkir: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    min_free_ongkir: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    skor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_legalitas: {
      type: DataTypes.ENUM('done','pending'),
      allowNull: true
    },
    change_name: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true,
      defaultValue: "1"
    },
    data_buka_toko: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_libur_toko: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'toko',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_toko" },
        ]
      },
      {
        name: "id_user",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "provinsi",
        using: "BTREE",
        fields: [
          { name: "provinsi" },
        ]
      },
      {
        name: "kota_kabupaten",
        using: "BTREE",
        fields: [
          { name: "kota_kabupaten" },
        ]
      },
      {
        name: "kecamatan",
        using: "BTREE",
        fields: [
          { name: "kecamatan" },
        ]
      },
      {
        name: "kelurahan",
        using: "BTREE",
        fields: [
          { name: "kelurahan" },
        ]
      },
      {
        name: "kode_pos",
        using: "BTREE",
        fields: [
          { name: "kode_pos" },
        ]
      },
    ]
  });
};
