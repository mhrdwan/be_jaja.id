const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('toko_saldo', {
    id_toko_saldo: {
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
    invoice: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nominal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fee: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nominal_total: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    accepted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('pending','done','refund'),
      allowNull: true,
      defaultValue: "pending"
    }
  }, {
    sequelize,
    tableName: 'toko_saldo',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_toko_saldo" },
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
