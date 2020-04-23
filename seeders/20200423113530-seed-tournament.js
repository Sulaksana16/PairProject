'use strict';
let data = require('../datadummy/tournament.json').map(element => {
  element.createdAt = new Date()
  element.updatedAt = new Date()
  return element
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tournaments', data, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tournaments', null, {});
  }
};
