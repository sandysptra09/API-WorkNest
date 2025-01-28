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
    role: DataTypes.ENUM(['Frotend Developer', 'Backend Developer', 'Fullstack Developer', 'Mobile Developer', 'DevOps Engineer', 'Data Scientist', 'Quality Assurance', 'UI/UX Designer']),
    departmen: DataTypes.ENUM(['IT', 'Software Development', 'Mobile App Development', 'IT Operations', 'Data Science and Analytics', 'Software Testing', 'Product Design']),
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.ENUM('Male', 'Female'),
    birthplace: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    phone: DataTypes.STRING,
    religion: DataTypes.ENUM(['Islam', 'Christian', 'Catholic', 'Hindu', 'Buddha', 'Konghucu']),
    marital_status: DataTypes.ENUM(['Single', 'Married', 'Divorced']),
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