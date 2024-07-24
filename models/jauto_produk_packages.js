const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jauto_produk_packages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_jauto_produk_grades: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    drivingOption: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    priceInclReplaceCarVat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    priceExclReplaceCarVat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    priceInclReplaceCar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    priceExclReplaceCar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yield: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    promoPriceInclReplaceCarVat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    promoPriceExclReplaceCarVat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    promoPriceInclReplaceCar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    promoPriceExclReplaceCar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    syariah: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    promo: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jauto_produk_packages',
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
      {
        name: "id_produk",
        using: "BTREE",
        fields: [
          { name: "id_jauto_produk_grades" },
        ]
      },
      {
        name: "id_produk_2",
        using: "BTREE",
        fields: [
          { name: "id_jauto_produk_grades" },
        ]
      },
    ]
  });
};
