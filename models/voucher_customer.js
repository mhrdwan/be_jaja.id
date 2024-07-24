const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('voucher_customer', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_voucher: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "voucher jaja",
      references: {
        model: 'promo_jaja',
        key: 'id_promo'
      }
    },
    id_voucher_toko: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "voucher toko",
      references: {
        model: 'promo_toko',
        key: 'id_promo'
      }
    },
    status_voucher: {
      type: DataTypes.ENUM('belum dipakai','terpakai'),
      allowNull: false,
      defaultValue: "belum dipakai"
    },
    klaim: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "Y"
    },
    kode_voucher: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'customer',
        key: 'id_customer'
      }
    },
    id_transaksi: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'voucher_customer',
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
        name: "id_voucher",
        using: "BTREE",
        fields: [
          { name: "id_voucher" },
        ]
      },
      {
        name: "id_customer",
        using: "BTREE",
        fields: [
          { name: "id_customer" },
        ]
      },
      {
        name: "id_voucher_toko",
        using: "BTREE",
        fields: [
          { name: "id_voucher_toko" },
        ]
      },
    ]
  });
};
