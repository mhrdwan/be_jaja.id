const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jauto_testdrive', {
    id_testdrive: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kode_testdrive: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name_produk: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    name_brand: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    firstname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    province: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    test_lokasi: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    test_tanggal: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "0000-00-00"
    },
    test_jam: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "00:00:00"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jauto_testdrive',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_testdrive" },
        ]
      },
    ]
  });
};
