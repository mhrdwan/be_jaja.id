const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('banner_toko', {
    id_banner: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    banner: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'toko',
        key: 'id_toko'
      }
    },
    banner_1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link_1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    banner_2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link_2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    banner_3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link_3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    banner_4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link_4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    banner_5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link_5: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'banner_toko',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_banner" },
        ]
      },
      {
        name: "id_toko",
        using: "BTREE",
        fields: [
          { name: "id_toko" },
        ]
      },
    ]
  });
};
