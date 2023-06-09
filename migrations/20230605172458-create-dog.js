'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      breed: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      intelligence: {
        type: Sequelize.INTEGER,
        validate:{
          min: 0,
          max: 5,
        },
      },
      loyalty: {
        type: Sequelize.INTEGER,
        validate:{
          min: 0,
          max: 5,
        },
      },
      energy: {
        type: Sequelize.INTEGER,
        validate:{
          min: 0,
          max: 5,
        },
      },
      affectionate: {
        type: Sequelize.INTEGER,
        validate:{
          min: 0,
          max: 5,
        },
      },
      profileId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Dogs');
  }
};