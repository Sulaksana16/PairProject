const { Tournament, User, TournamentUser  } = require('../models');

class TournamentController {
    static tournamentList(req, res){
        
        Tournament
            .findAll()
            .then (tournaments => {
                res.render('tournament-list.ejs' ,{tournaments});
            })
            .catch(err => {
                res.send(err.message);
            })
    }

}

module.exports = TournamentController;

