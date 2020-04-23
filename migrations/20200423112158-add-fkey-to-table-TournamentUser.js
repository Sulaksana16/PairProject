'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('TournamentUsers', 'IdTournament', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Tournaments',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
      .then(result => {
        return queryInterface.addColumn('TournamentUsers', 'IdUser', {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('TournamentUsers', 'IdTournament', {})
      .then(result => {
        return queryInterface.removeColumn('TournamentUsers', 'IdUser', {})
      })
  }
};
