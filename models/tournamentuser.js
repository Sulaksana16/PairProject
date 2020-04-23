'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class TournamentUser extends Model { }

  TournamentUser.init({
    IdTournament: DataTypes.INTEGER,
    IdUser: DataTypes.INTEGER
  }, { 
    sequelize,
    validate: {
      isRegistered() {
        const ModelAll = sequelize.models;
        const TournamentUser = ModelAll.TournamentUser;
        return TournamentUser.findAll()
          .then(data => {
            console.log(data);
          for (let i = 0; i < data.length; i++){
            if(this.IdUser == data[i].IdUser && this.IdTournament == data[i].IdTournament){
              throw new Error ('You Are Already Registered')
            }
          }
        })
      }
    } 
  })

  TournamentUser.associate = function (models) {
    TournamentUser.belongsTo(models.User, { foreignKey: 'IdUser' })
    TournamentUser.belongsTo(models.Tournament, { foreignKey: 'IdTournament' })
  };
  return TournamentUser;
};

