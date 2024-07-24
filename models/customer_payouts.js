const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_payouts', {
    id_pay: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_rekening_cust: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    acc_holder_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    beneficiary_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    beneficiary_account: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    beneficiary_bank: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    beneficiary_email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bank_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    fee: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    amount_total: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('queued','processed','completed','failed','approved','reject'),
      allowNull: true
    },
    reject_reason: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "if payouts is reject"
    },
    reference_no: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    approval_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    approv_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer_payouts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pay" },
        ]
      },
    ]
  });
};
