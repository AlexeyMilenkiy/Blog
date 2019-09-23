const express = require('express');
const followers = express.Router();
const controller = require('../controllers/followers-controller');
const { validate } = require('../helpers/validator');
const { body } = require('express-validator');

followers.post('/',  validate([
    body('userId')
        .not().isEmpty()
        .isNumeric()    ,
    body('followerId')
        .not().isEmpty()
        .isNumeric()
]), controller.setSubscription);

followers.delete('/', controller.setSubscription);

module.exports = followers;
