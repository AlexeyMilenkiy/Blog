const express = require('express');
const register = express.Router();
const controller = require('../controllers/register-controller');
const { body } = require('express-validator');
const { validate } = require('../helpers/validator');

register.post('/', controller.registerUser);

module.exports = register;