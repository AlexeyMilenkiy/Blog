const express = require('express');
const followers = express.Router({ mergeParams : true });
const controller = require('../controllers/followers-controller');
const { validate } = require('../helpers/validator');
const { body, param } = require('express-validator');

followers.post('/',  validate([
    body('userId')
        .not().isEmpty()
        .isNumeric(),
    body('followerId')
        .not().isEmpty()
        .isNumeric()
]), controller.setSubscription);

followers.delete('/', validate([
    param('id')
        .not().isEmpty()
        .isNumeric(),
]),controller.removeSubscription);

module.exports = followers;
