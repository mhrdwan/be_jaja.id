const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jauto_order', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    invoiceNo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    id_produk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name_produk: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    id_produk_grades: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_body: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    id_velg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    id_interior: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    name_produk_grades: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    name_brand: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_jenis: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name_jenis: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    metodeBayar: {
      type: DataTypes.ENUM('Kredit','Cash'),
      allowNull: true
    },
    uangMuka: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    uangMuka_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    id_bank: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_wilayah: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    packageId: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    contactNumber: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    domisili: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    otr: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    velg: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    interior: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    grandtotal: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    tenorTahun: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'jauto_order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
