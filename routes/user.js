const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');

router.get('/:user_id/setting', UserController.settingUser);

module.exports = router;