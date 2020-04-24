'use strict';
let data = require('../datadummy/userdummy.json').map(element => {
  element.createdAt = new Date()
  element.updatedAt = new Date()
  return element
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
