const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pengaturan_flashsale', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    judul_flashsale: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    banner: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_admin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama_admin: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    created_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('aktif','tidak'),
      allowNull: false,
      defaultValue: "tidak"
    }
  }, {
    sequelize,
    tableName: 'pengaturan_flashsale',
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
