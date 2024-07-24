const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jauto_merek', {
    id_merek: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_merek: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    slug_merek: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hex_color: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jauto_merek',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_merek" },
        ]
      },
    ]
  });
};
