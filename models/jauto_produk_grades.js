const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jauto_produk_grades', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_jauto_produk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    typeCode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    spesifikasi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transmisi: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    warna: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bbm: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    seat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isActive: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    listrikNonListrik: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    rangeHarga: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jauto_produk_grades',
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
      {
        name: "id_produk",
        using: "BTREE",
        fields: [
          { name: "id_jauto_produk" },
        ]
      },
      {
        name: "id_produk_2",
        using: "BTREE",
        fields: [
          { name: "id_jauto_produk" },
        ]
      },
    ]
  });
};
