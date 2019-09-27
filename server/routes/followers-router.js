const express = require('express');
const followers = express.Router({ mergeParams : true });
const controller = require('../controllers/followers-controller');
const { validate } = require('../helpers/validator');
const { body } = require('express-validator');

followers.post('/',  validate([
    body('userId')
        .not().isEmpty()
        .isNumeric(),
    body('followingId')
        .not().isEmpty()
        .isNumeric()
]), controller.setSubscription);

followers.delete('/', controller.removeSubscription);

module.exports = followers;
