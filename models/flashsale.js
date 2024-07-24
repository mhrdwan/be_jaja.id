const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flashsale', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    judul_flashsale: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_live: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    time_live: {
      type: DataTypes.ENUM('09:00','18:00'),
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
    status_flashsale: {
      type: DataTypes.ENUM('aktif','nonaktif'),
      allowNull: true,
      defaultValue: "nonaktif"
    },
    id_toko: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'flashsale',
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
    ]
  });
};
