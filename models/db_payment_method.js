const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_payment_method', {
    id_payment_method: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_payment_method: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    slug_payment_method: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    slug_payment_method_app: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    slug_payment_method_sub: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    img_payment_method: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qris: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_form: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'db_payment_method',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_payment_method" },
        ]
      },
    ]
  });
};
