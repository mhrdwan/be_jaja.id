const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produk_variasi', {
    id_data: {
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
    kode_sku: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    warna: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ukuran: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    harga_normal: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    harga_variasi: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    nominal_diskon: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    presentase_diskon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_discount_percent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    tgl_mulai_diskon: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tgl_berakhir_diskon: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'produk_variasi',
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
      {
        name: "model",
        using: "BTREE",
        fields: [
          { name: "model" },
        ]
      },
      {
        name: "warna",
        using: "BTREE",
        fields: [
          { name: "warna" },
        ]
      },
      {
        name: "ukuran",
        using: "BTREE",
        fields: [
          { name: "ukuran" },
        ]
      },
      {
        name: "id_produk_2",
        using: "BTREE",
        fields: [
          { name: "id_produk" },
        ]
      },
    ]
  });
};
