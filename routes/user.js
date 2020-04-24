const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js')
const TournamentController = require('../controllers/tournamentController');


router.get('/', UserController.loginForm)
// router.get('/:id', UserController.compare)
router.get('/register', UserController.registerForm)
router.post('/register', UserController.register)
router.post('/signin', UserController.signIn)


module.exports = router;