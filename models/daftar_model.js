const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('daftar_model', {
    idv: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jenis: {
      type: DataTypes.ENUM('warna','ukuran'),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'daftar_model',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idv" },
        ]
      },
    ]
  });
};
