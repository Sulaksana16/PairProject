const { Tournament, User, TournamentUser  } = require('../models');

class TournamentController {
    static tournamentList(req, res){
        let userData = null;
        User
            .findByPk(Number(req.params.user_id))
            .then (data =>{
                userData = data;
                return Tournament.findAll()
            })
            .then (tournaments => {
                res.render('tournament-list.ejs' ,{tournaments, user:userData});
            })
            .catch(err => {
                res.send(err.message);
            })
    }

    static tournamentRegister(req, res){
        let userData = null;
        User
            .findByPk(Number(req.params.user_id))
            .then (data => {
                userData = data;
                return Tournament.findByPk(Number(req.params.tournament_id));
            })
            .then (tournament => {
                res.render('register-confirm.ejs', {tournament, user:userData});
            })
            .catch(err => {
                res.send(err.message);
            })
    }

    static inputTournamentRegister(req, res){
        const input = {
            IdUser: Number(req.body.IdUser),
            IdTournament: Number(req.body.IdTournament)
        }

        TournamentUser
            .create(input)
            .then (input => {
                res.redirect(`/tournaments/${input.IdUser}`);
            })
            .catch(err => {
                res.send(err.message);
            })
    }

    static seeTournamentPacticipant(req,res){
        const options = {
            include: [{
                model:User,
                as:'users'
            }],
            where: {
                id:Number(req.params.tournament_id)
            }
        }
        let userData = null;
        User
            .findByPk(Number(req.params.user_id))
            .then (data =>{
                userData = data;
                return Tournament.findAll(options)
            })
            .then (tournament => {
                res.render('participant-tournament.ejs', { tournament:tournament[0], user:userData })
            })
            .catch(err => {
                res.send(err.message);
            })
        
    }


}

module.exports = TournamentController;

