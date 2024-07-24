const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jauto_order_detail', {
    id_order_detail: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    angsuran_bulanan: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    angsuran_bunga: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    angsuran_pokok: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    angsuranPertama: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    biayaAdministrasi: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bunga: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: false
    },
    tenorTahun: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jauto_order_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_order_detail" },
        ]
      },
    ]
  });
};
