const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo_reward', {
    id_reward: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    reward_type: {
      type: DataTypes.ENUM('transaksi','register','referral'),
      allowNull: false
    },
    start_period: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_period: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'promo_reward',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_reward" },
        ]
      },
    ]
  });
};
