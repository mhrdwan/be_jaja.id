const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_payment_method_category', {
    id_payment_method_category: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_category: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    slug_category: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    slug_category_app: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    markup_value: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    markup_type: {
      type: DataTypes.ENUM('$','%'),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_payment_method_category',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_payment_method_category" },
        ]
      },
    ]
  });
};
