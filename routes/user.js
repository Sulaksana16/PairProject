const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');

router.get('/', UserController.loginForm)
router.get('/register', UserController.registerForm)
router.post('/register', UserController.register)
router.post('/signin', UserController.signIn)
router.get('/:user_id/setting', UserController.settingUser);
router.post('/:user_id/setting', UserController.inputSettingUser)

module.exports = router;