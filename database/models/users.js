'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    nip: DataTypes.STRING,
    nik: DataTypes.INTEGER,
    role: DataTypes.ENUM,
    departmen: DataTypes.ENUM,
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.ENUM,
    birthplace: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    phone: DataTypes.STRING,
    religion: DataTypes.ENUM,
    marital_status: DataTypes.ENUM,
    address: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    user_role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};