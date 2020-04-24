const express = require('express');
const router = express.Router();

const tournamentRouter = require('./tournament.js');
const userRouter = require('./user.js');

router.use('/tournaments', tournamentRouter);
router.use('/users', userRouter);

module.exports = router;