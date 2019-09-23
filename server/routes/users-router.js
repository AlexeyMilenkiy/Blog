const express = require('express');
const users = express.Router();
const controller = require('../controllers/users-controller');
const { validate } = require('../helpers/validator');
const { body } = require('express-validator');


users.post('/',  controller.searchUsers);

module.exports =  users;

// validate([
//     body('user')
//         .not().isEmpty()
//         .trim()
//         .isLength({ min: 1, max: 50 }),
//     body('id')
//         .not().isEmpty()
//         .isNumeric()
// ]),
