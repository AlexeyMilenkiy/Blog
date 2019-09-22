const express = require('express');
const login = express.Router();
const controller = require('../controllers/login-controller');
const { body } = require('express-validator');
const { validate } = require('../helpers/validator');


login.post('/', validate([
    body('email')
        .isEmail()
        .normalizeEmail()
        .isLength({ max: 50 }),
    body('password')
        .isLength({ min: 6, max: 50})
]), controller.loginUser);

module.exports = login;
