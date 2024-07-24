const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_refund', {
    id_refund: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    total_refund: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fee_refund: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('done','pending','process'),
      allowNull: false,
      defaultValue: "pending"
    },
    metode_refund: {
      type: DataTypes.ENUM('koin','rekening'),
      allowNull: true,
      comment: "koin,rekening"
    },
    id_rekening: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    norek: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    confirm_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    bukti_tf: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer_refund',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_refund" },
        ]
      },
    ]
  });
};
