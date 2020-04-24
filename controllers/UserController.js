const { Tournament, User, TournamentUser } = require('../models');


class UserController {
    static loginForm(req, res) {
        res.render('loginForm.ejs')
    }

    // static compare(req, res) {
    //     const options = {
    //         name: req.body.name,
    //         password: req.body.password
    //     }

    //     User
    //         .findByPk(parseInt(req.), options)
    //         .then(result => {
    //             if (options == result) {
    //                 res.redirect('/tournaments')
    //             }
    //         })
    //         .catch(err => { res.send(err) })
    // }

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

}

module.exports = UserController