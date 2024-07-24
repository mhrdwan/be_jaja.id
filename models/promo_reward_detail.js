const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_reward_detail', {
    id_detail: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id_reward: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    reward: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    reward_type: {
      type: DataTypes.ENUM('point','gift'),
      allowNull: false,
      defaultValue: "point"
    },
    reward_img: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reward_deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    start_periode: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_period: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    minimum_transaksi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    platform: {
      type: DataTypes.ENUM('web','android','ios','all'),
      allowNull: false
    },
    winner: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_winner: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status_aktif: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'promo_reward_detail',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_detail" },
        ]
      },
      {
        name: "id_reward",
        using: "BTREE",
        fields: [
          { name: "id_reward" },
        ]
      },
    ]
  });
};
