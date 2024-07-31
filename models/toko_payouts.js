const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('toko_payouts', {
    id_payouts: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'toko',
        key: 'id_toko'
      }
    },
    id_toko_bank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'toko_bank',
        key: 'id_data'
      }
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
    amount: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    fee: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    amount_total: {
      type: DataTypes.BIGINT,
      allowNull: false
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
      allowNull: true,
      comment: "if payouts is reject"
    },
    reference_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    approval_check_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    approval_check_by: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'toko_payouts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_payouts" },
        ]
      },
      {
        name: "id_toko_bank",
        using: "BTREE",
        fields: [
          { name: "id_toko_bank" },
        ]
      },
      {
        name: "id_toko",
        using: "BTREE",
        fields: [
          { name: "id_toko" },
        ]
      },
    ]
  });
};
