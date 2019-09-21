const express = require('express');
const register = express.Router();
const controller = require('../controllers/register-controller');
const checkToken = require('../helpers/checkToken');

register.get('/', checkToken);

register.post('/', controller.registerUser);

module.exports = register;