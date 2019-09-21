const express = require('express');
const login = express.Router();
const controller = require('../controllers/login-controller');

login.post('/', controller.loginUser);

module.exports = login;