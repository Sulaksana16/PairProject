'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class TournamentUser extends Model { }

  TournamentUser.init({
    IdTournament: DataTypes.INTEGER,
    IdUser: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, { sequelize })

  TournamentUser.associate = function (models) {
    // associations can be defined here
    TournamentUser.belongsTo(models.User, { foreignKey: 'IdUser' })
    TournamentUser.belongsTo(models.Tournament, { foreignKey: 'IdTournament' })
  };
  return TournamentUser;
};

