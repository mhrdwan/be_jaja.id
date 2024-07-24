const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_npl', {
    id_npl: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_lelang: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    npl: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    kategori_lelang: {
      type: DataTypes.ENUM('mobil','motor','gadget'),
      allowNull: false
    },
    tgl_lelang: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    type_npl: {
      type: DataTypes.ENUM('live','unlimited'),
      allowNull: false
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    nominal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "1"
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'customer_npl',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_npl" },
        ]
      },
    ]
  });
};
