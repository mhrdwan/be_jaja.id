const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lelang_merk', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kategori: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    merk_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    merk: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    aktif: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lelang_merk',
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
