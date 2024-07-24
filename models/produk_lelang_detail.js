const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produk_lelang_detail', {
    id_detail: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_lelang: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_npl: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    npl: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'produk_lelang_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_detail" },
        ]
      },
      {
        name: "lelang",
        using: "BTREE",
        fields: [
          { name: "id_lelang" },
        ]
      },
    ]
  });
};
