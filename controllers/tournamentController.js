const { Tournament, User, TournamentUser  } = require('../models');
const sendEmail = require('../helper/help.js');

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
        const { error } = req.session
        delete req.session.error
        let userData = null;
        User
            .findByPk(Number(req.params.user_id))
            .then (data => {
                userData = data;
                return Tournament.findByPk(Number(req.params.tournament_id));
            })
            .then (tournament => {
                res.render('register-confirm.ejs', {tournament, user:userData, error });
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
        let userEmail = null;
        User
            .findByPk(Number(req.body.IdUser))
            .then(data => {
                userEmail = data.email;
                return TournamentUser.create(input)
            })
            .then (input => {
                sendEmail(userEmail);
                res.redirect(`/tournaments/${input.IdUser}`);
                })
            .catch(err => {
                req.session.error = err.message
                res.redirect(`/tournaments/${Number(req.body.IdUser)}/register/${Number(req.body.IdTournament)}`);
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

