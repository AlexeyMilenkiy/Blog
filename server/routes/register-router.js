const express = require('express');
const register = express.Router();
const controller = require('../controllers/register-controller');
const { body } = require('express-validator');
const { validate } = require('../helpers/validator');

register.post('/', validate([
    body('name')
        .not().isEmpty()
        .trim()
        .isLength({ min: 2, max: 50 }),
    body('email')
        .isEmail()
        .normalizeEmail()
        .isLength({ min: 6, max: 50 }),
    body('password').isLength({ min: 6, max: 50 })
]),controller.registerUser);

module.exports = register;
