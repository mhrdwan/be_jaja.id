const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('toko_bank', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bank_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bank_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    account: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    alias_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    branch_office: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "by email"
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'toko',
        key: 'id_toko'
      }
    }
  }, {
    sequelize,
    tableName: 'toko_bank',
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
        name: "id_toko",
        using: "BTREE",
        fields: [
          { name: "id_toko" },
        ]
      },
    ]
  });
};
