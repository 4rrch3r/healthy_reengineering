'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('hospitalMigration',
    {
      name:{
        type:Sequelize.STRING(50),
        allowNull: false,
    },
    quantityEmployees:{
        type:Sequelize.INTEGER,
        validate: {
            isNumeric: true,
          },
    },
    address:{
        type:Sequelize.STRING(50),
        allowNull: false,
    },
    })
  },
};
