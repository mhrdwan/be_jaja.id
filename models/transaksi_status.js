const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaksi_status', {
    id_transaksi_status: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    slug_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    keterangan: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    isactive: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'transaksi_status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_transaksi_status" },
        ]
      },
    ]
  });
};
