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
    console.log(userId);

    sequelize.Post.findAll({where: {authorId: userId}})
        .then(posts => {
            res.json(posts);
        })
        .catch(err => {
            res.json(err)
        })
};

module.exports = { addPost, getMyPosts };
