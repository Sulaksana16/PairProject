const express = require('express');
const router = express.Router();
const TournamentController = require('../controllers/tournamentController');

router.get('/', TournamentController.tournamentList);

module.exports = router;