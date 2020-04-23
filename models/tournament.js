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
    // associations can be defined here\
    Tournament.belongsToMany(models.User, { through: 'TournamentUsers', foreignKey: 'IdUser' })
  };
  return Tournament;
};

