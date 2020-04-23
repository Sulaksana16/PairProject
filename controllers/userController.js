const { Tournament, User, TournamentUser  } = require('../models');

class UserController {
    static settingUser(req, res){
        const options = {
            include: [{
                model: Tournament,
                as:'tournaments'
            }],
            where: {
                id:Number(req.params.user_id)
            }
        }
        User
            .findAll(options)
            .then(user =>{
                // res.send(user[0]);
                res.render('user-setting.ejs', {user:user[0]});
            })
            .catch(err => {
                res.send(err.message)
            })
    }
}

module.exports = UserController;