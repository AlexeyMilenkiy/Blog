const sequelize = require('../db/sequelize');

const addPost = (req, res) => {
    let post = req.body;

    sequelize.Post.create({...post})
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            res.json(err)
        })
};

const getMyPosts = (req, res) => {
    let userId = req.headers.id;

    sequelize.Post.findAll({where: {author_id: userId}})
        .then(posts => {
            res.json(posts);
        })
        .catch(err => {
            res.json(err)
        })
};

module.exports = { addPost, getMyPosts };
