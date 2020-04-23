const express = require('express');
const router = express.Router();
const TournamentController = require('../controllers/tournamentController');

router.get('/:user_id', TournamentController.tournamentList);
router.get('/:user_id/register/:tournament_id', TournamentController.tournamentRegister);
router.post('/:user_id/register/:tournament_id', TournamentController.inputTournamentRegister);
router.get('/:user_id/:tournament_id/participants', TournamentController.seeTournamentPacticipant);

module.exports = router;