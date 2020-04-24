const express = require('express');
const router = express.Router();
const TournamentController = require('../controllers/tournamentController');

router.get('/:user_id', TournamentController.tournamentList);

module.exports = router;