const express = require('express');
const { register, login, logout, forgotPassword, resetPassword } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);


module.exports = router;