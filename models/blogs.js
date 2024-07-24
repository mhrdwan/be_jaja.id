const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blogs', {
    id_blog: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_author: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_categ_blog: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keyword: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    seo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ket_image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    visit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    show_slide: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true,
      defaultValue: "0",
      comment: "1 = tampil \r\n0 = tidak tampil"
    },
    active: {
      type: DataTypes.ENUM('1'),
      allowNull: true,
      comment: "1=slide utama"
    }
  }, {
    sequelize,
    tableName: 'blogs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_blog" },
        ]
      },
    ]
  });
};
