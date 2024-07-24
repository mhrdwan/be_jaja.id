const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_view', {
    id_view: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_agent: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    date_view: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'customer_view',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_view" },
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
        name: "produk",
        using: "BTREE",
        fields: [
          { name: "id_produk" },
        ]
      },
    ]
  });
};
