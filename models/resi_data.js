const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resi_data', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice: {
      type: DataTypes.STRING(255),
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
    nomor_resi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kurir: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pengiriman: {
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
    berat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sub_total_ongkir: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    total_biaya_ongkir: {
      type: DataTypes.DECIMAL(25,0),
      allowNull: true
    },
    tipe_pengiriman: {
      type: DataTypes.ENUM('manual booking','online booking'),
      allowNull: true
    },
    date_tipe_pengiriman: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pesanan_diterima: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    date_time_diterima: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'resi_data',
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
        name: "resi_data_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "id_toko" },
        ]
      },
    ]
  });
};
