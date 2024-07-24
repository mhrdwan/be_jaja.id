const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lelang_seri', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    merk_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    merk: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    seri_id: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    seri: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    silinder: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    transmisi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bahanBakar: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'lelang_seri',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
