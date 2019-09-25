const express = require('express');
const posts = express.Router();
const controller = require('../controllers/posts-controller');
const { validate } = require('../helpers/validator');
const { body } = require('express-validator');

posts.post('/',  validate([
    body('title')
        .not().isEmpty()
        .trim()
        .isLength({ min: 1, max: 50 }),
    body('text')
        .not().isEmpty()
        .trim()
        .isLength({ min: 1, max: 100 }),
    body('date')
        .not().isEmpty()
        .trim(),
    body('author_id')
        .not().isEmpty()
        .isNumeric()
]), controller.addPost);

posts.get('/', controller.getMyPosts);

module.exports =  posts;


