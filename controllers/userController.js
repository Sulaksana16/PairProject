const { Tournament, User, TournamentUser  } = require('../models');

class UserController {
    static loginForm(req, res) {
        res.render('loginForm.ejs')
    }

    static registerForm(req, res) {
        const { error } = req.session
        delete req.session.error
        res.render('register.ejs', { error })
    }

    static register(req, res) {
        const { username, email, password, confirmpassword } = req.body
        if (password !== confirmpassword) {
            req.session.error = 'Password not match'
            return res.redirect('/users/register')
        }
        const newUser = { username, email, password }
        User
            .create(newUser)
            .then(() => (res.redirect('/users')))
            .catch(err => {
                req.session.error = err.message
                res.redirect('/users/register')
            })
    }

    static signIn(req, res) {
        const { email, password } = req.body

        User
            .findOne({ where: { email, password } })
            .then(result => res.redirect(`/tournaments/${result.id}`))
            .catch(err => {
                req.session.error = err.message
            })
    }

//////////////////////////////////////////////////
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

    static inputSettingUser(req, res){
        const option = {
            where: {
                id:Number(req.params.user_id)
            }
        }

        const input = {
            username:req.body.username,
            email:req.body.email
        }

        User
            .update(input, option)
            .then(_ => {
                res.redirect(`/users/${Number(req.params.user_id)}/setting`)
            })
            .catch(err =>{
                res.send(err.message);
            })
    }
}

module.exports = UserController;