const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaksi_token', {
    id_token: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    billing_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    grand_total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    token_app: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payment_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    payment_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    payment_type_label: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    payment_sub: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    payment_sub_label: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    payment_va_or_code_or_link: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payment_form: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'transaksi_token',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_token" },
        ]
      },
    ]
  });
};
