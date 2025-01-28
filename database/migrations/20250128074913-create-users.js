'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nip: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [5, 20]
        }
      },
      nik: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
          len: [16, 16],
          isInt: true
        }
      },
      role: {
        type: Sequelize.ENUM('Frotend Developer', 'Backend Developer', 'Fullstack Developer', 'Mobile Developer', 'DevOps Engineer', 'Data Scientist', 'Quality Assurance', 'UI/UX Designer'),
        allowNull: false
      },
      departmen: {
        type: Sequelize.ENUM('IT', 'Software Development', 'Mobile App Development', 'IT Operations', 'Data Science and Analytics', 'Software Testing', 'Product Design'),
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [3, 20]
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      gender: {
        type: Sequelize.ENUM('Male', 'Female'),
        allowNull: false
      },
      birthplace: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birthdate: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true
        }
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [10, 15],
          isNumeric: true
        }
      },
      religion: {
        type: Sequelize.ENUM('Islam', 'Christian', 'Catholic', 'Hindu', 'Buddha', 'Konghucu'),
        allowNull: false
      },
      marital_status: {
        type: Sequelize.ENUM('Single', 'Married', 'Divorced'),
        allowNull: false
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_role: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['admin', 'employee']]
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};