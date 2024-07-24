const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blogs_author', {
    id_author: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    author_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    seo_author: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipe_author: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image_author: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    admin: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'blogs_author',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_author" },
        ]
      },
    ]
  });
};
