'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Seed commands

    const date = new Date()

    await queryInterface.bulkInsert('Dogs', [{
      profileId: 1,
      name: 'Simba',
      breed: 'golden',
      photo: 'https://i.imgur.com/izJwDia.png', 
      createdAt: date,
      updatedAt: date,
    }])

  },

  async down (queryInterface, Sequelize) {
    // Commands to revert seed
    
    await queryInterface.bulkDelete('Dogs', null, {})

  }
};