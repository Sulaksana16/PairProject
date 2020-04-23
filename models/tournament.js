'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Tournament extends Model { }

  Tournament.init({
    name: DataTypes.STRING,
    organizer: DataTypes.STRING,
    quota: DataTypes.INTEGER,
    prize: DataTypes.INTEGER,
    location: DataTypes.STRING,
    date: DataTypes.DATEONLY,
  }, { sequelize })

  Tournament.associate = function (models) {
    Tournament.belongsToMany(models.User, { through: 'TournamentUsers', as:'users', foreignKey: 'IdTournament' })
  };
  return Tournament;
};

