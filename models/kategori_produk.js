const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kategori_produk', {
    id_kategori: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kategori: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    slug_kategori: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_parent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    route: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tema: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    marker1: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      comment: "buku"
    },
    marker2: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      comment: "ebook"
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    nama_admin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    icon_apps: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false
    },
    hidden_kategori: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: true,
      defaultValue: "T"
    }
  }, {
    sequelize,
    tableName: 'kategori_produk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_kategori" },
        ]
      },
      {
        name: "seo",
        using: "BTREE",
        fields: [
          { name: "seo" },
        ]
      },
      {
        name: "kategori",
        using: "BTREE",
        fields: [
          { name: "kategori" },
        ]
      },
      {
        name: "id_parent",
        using: "BTREE",
        fields: [
          { name: "id_parent" },
        ]
      },
      {
        name: "slug_kategori",
        using: "BTREE",
        fields: [
          { name: "slug_kategori" },
        ]
      },
    ]
  });
};
