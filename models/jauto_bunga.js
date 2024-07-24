const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jauto_bunga', {
    id_bunga: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_bank: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_wilayah: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tenor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bunga: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jauto_bunga',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_bunga" },
        ]
      },
    ]
  });
};
