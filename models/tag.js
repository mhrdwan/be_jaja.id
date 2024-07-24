const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tag', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_admin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama_tag: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "nama_tag"
    }
  }, {
    sequelize,
    tableName: 'tag',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_data" },
        ]
      },
      {
        name: "nama_tag",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nama_tag" },
        ]
      },
    ]
  });
};
