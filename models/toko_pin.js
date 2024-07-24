const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('toko_pin', {
    id_pin: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'toko',
        key: 'id_toko'
      }
    },
    pin: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'toko_pin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pin" },
        ]
      },
      {
        name: "id_toko",
        using: "BTREE",
        fields: [
          { name: "id_toko" },
        ]
      },
    ]
  });
};
