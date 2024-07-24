const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tempebh', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    voucher: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "voucher"
    }
  }, {
    sequelize,
    tableName: 'tempebh',
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
        name: "voucher",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "voucher" },
        ]
      },
    ]
  });
};
