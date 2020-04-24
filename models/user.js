'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class User extends Model { }

  User.init({
    username:{
      type: DataTypes.STRING,
      validate : {
        notEmpty: true
      }
    },  
    password: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: true
      }
    },  
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    } 
  }, { sequelize })

  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Tournament, { through: 'TournamentUsers', as:'tournaments', foreignKey: 'IdUser' })
  };
  return User;
};