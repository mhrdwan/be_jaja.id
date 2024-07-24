const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer', {
    id_customer: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pin: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    referral_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nama_lengkap: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "email"
    },
    password: {
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
    username: {
      type: DataTypes.STRING(25),
      allowNull: true,
      unique: "username"
    },
    koin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jenis_kelamin: {
      type: DataTypes.ENUM('pria','wanita'),
      allowNull: true
    },
    tgl_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    telepon: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    from_login: {
      type: DataTypes.ENUM('facebook','website','google','android','ios','apple'),
      allowNull: false
    },
    verifikasi: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: false,
      defaultValue: "T"
    },
    foto_customer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pin_secret: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    code_secret: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    last_update_password: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status_login: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: true
    },
    activity_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    activity_logout: {
      type: DataTypes.DATE,
      allowNull: true
    },
    typing: {
      type: DataTypes.ENUM('T','Y'),
      allowNull: true
    },
    blokir: {
      type: DataTypes.ENUM('Y','T'),
      allowNull: true,
      defaultValue: "T"
    }
  }, {
    sequelize,
    tableName: 'customer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_customer" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "username",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
};
